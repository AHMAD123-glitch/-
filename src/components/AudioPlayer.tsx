import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  RotateCw, 
  X, 
  ChevronUp, 
  ChevronDown, 
  Headphones,
  Download
} from 'lucide-react';

export interface ActiveAudio {
  title: string;
  subtitle: string;
  audioUrl: string;
  sourceType: 'quran' | 'lesson';
}

interface AudioPlayerProps {
  currentAudio: ActiveAudio | null;
  onClose: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ currentAudio, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(0.9);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // When active audio changes, start playback
  useEffect(() => {
    if (currentAudio && audioRef.current) {
      setAudioError(false);
      audioRef.current.src = currentAudio.audioUrl;
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Auto-play was prevented or audio format unsupported:', e);
        setIsPlaying(false);
      });
    }
  }, [currentAudio]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
    }
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 1.75, 0.85];
    const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIndex];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return '00:00';
    const totalSecs = Math.floor(timeInSec);
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!currentAudio) return null;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 ${
        isMinimized 
          ? 'bottom-16 lg:bottom-4 left-4 right-4 max-w-sm ml-auto' 
          : 'bottom-14 lg:bottom-0 left-0 right-0'
      }`}
    >
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={() => setAudioError(true)}
      />

      {isMinimized ? (
        // Minimized floating bubble
        <div className="bg-stone-900 border border-emerald-600/60 rounded-xl p-3 shadow-2xl flex items-center justify-between text-stone-100">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-amber-300 shrink-0">
              <Headphones className="w-4 h-4 animate-pulse" />
            </div>
            <div className="truncate text-xs">
              <p className="font-semibold text-white truncate">{currentAudio.title}</p>
              <p className="text-stone-400 text-[10px]">{formatTime(currentTime)} / {formatTime(duration)}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={togglePlay}
              className="p-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 text-stone-400 hover:text-white"
              title="توسيع المشغل"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-stone-400 hover:text-red-400"
              title="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        // Full bottom bar
        <div className="bg-stone-900/98 border-t border-emerald-700/60 shadow-[0_-8px_20px_rgba(0,0,0,0.35)] px-4 py-2.5 sm:py-3 text-stone-100">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            
            {/* Audio Details */}
            <div className="flex items-center gap-3 w-full sm:w-auto min-w-[220px]">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/80 border border-emerald-600/40 flex items-center justify-center text-amber-300 shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="overflow-hidden flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-emerald-800/80 text-emerald-200 px-1.5 py-0.5 rounded font-medium">
                    {currentAudio.sourceType === 'quran' ? 'تلاوة سورة كاملة' : 'تسجيل صوتي كامل للدرس'}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate">
                    {currentAudio.title}
                  </h4>
                </div>
                <p className="text-[11px] text-stone-400 truncate">
                  {currentAudio.subtitle}
                </p>
                {audioError && (
                  <p className="text-[10px] text-amber-400">
                    جاري تحميل المقطع أو فحص مصدر البث...
                  </p>
                )}
              </div>
            </div>

            {/* Controls & Progress bar */}
            <div className="flex flex-col items-center gap-1 w-full max-w-xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => skipTime(-15)}
                  className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                  title="رجوع 15 ثانية"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  id="global-audio-play-pause"
                  onClick={togglePlay}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                  onClick={() => skipTime(15)}
                  className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
                  title="تقديم 15 ثانية"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                <button
                  onClick={cyclePlaybackRate}
                  className="text-xs px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono"
                  title="تغيير سرعة التشغيل"
                >
                  {playbackRate}x
                </button>
              </div>

              {/* Progress Slider */}
              <div className="flex items-center gap-2 w-full text-[11px] text-stone-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400"
                />
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Extra Controls */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-stone-400">
                <button onClick={toggleMute} className="hover:text-stone-200">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setVolume(val);
                    setIsMuted(val === 0);
                    if (audioRef.current) {
                      audioRef.current.volume = val;
                      audioRef.current.muted = false;
                    }
                  }}
                  className="w-16 h-1 bg-stone-700 rounded appearance-none accent-emerald-500 cursor-pointer"
                />
              </div>

              <a
                href={currentAudio.audioUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-stone-400 hover:text-amber-400 transition-colors"
                title="تحميل الملف الصوتي"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 text-stone-400 hover:text-white transition-colors"
                title="تصغير الشريط"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-stone-400 hover:text-red-400 transition-colors"
                title="إيقاف وإغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
