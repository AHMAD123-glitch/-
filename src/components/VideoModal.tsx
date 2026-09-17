import React from 'react';
import { X, ExternalLink, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { VideoLesson } from '../types';
import { INSTITUTE_INFO } from '../data/mockData';

interface VideoModalProps {
  video: VideoLesson | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-lg">
              {video.title}
            </h3>
          </div>
          <button
            id="close-video-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Official Video Portal Presentation Area */}
        <div className="relative aspect-video bg-gradient-to-br from-stone-950 via-emerald-950 to-stone-900 w-full flex flex-col items-center justify-center p-6 text-center border-b border-stone-800">
          <div className="max-w-lg space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>مصدر رسمي معتمد من معهد السنة</span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold font-amiri text-white leading-snug">
              {video.title}
            </h4>

            <p className="text-xs text-stone-300">
              {video.sheikh} • {video.series} ({video.duration})
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                id="watch-official-site-btn"
                href={INSTITUTE_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <span>فتح الدرس عبر موقع المعهد الرسمي ({INSTITUTE_INFO.officialWebsiteDisplay})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Info & Scientific Context */}
        <div className="p-5 overflow-y-auto space-y-4 bg-stone-900 text-stone-200">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-800 text-xs text-stone-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>المدة: {video.duration}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>التاريخ: {video.date}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-medium bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{video.sheikh}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-amber-400 block mb-1">
              السلسلة: {video.series}
            </span>
            <p className="text-sm text-stone-300 leading-relaxed">
              {video.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {video.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs bg-stone-800 text-stone-300 px-2.5 py-1 rounded-md border border-stone-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Direct link to books website for syllabus support */}
          <div className="mt-4 p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-300">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>هل تبحث عن المتن المشجر أو الكتاب المعتمد في هذا الشرح؟</span>
            </div>
            <a
              href={INSTITUTE_INFO.booksWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold transition-colors"
            >
              <span>تصفح كتب ومتون الشرح عبر {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
