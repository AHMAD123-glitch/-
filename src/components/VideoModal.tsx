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

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black w-full">
          <iframe
            src={`${video.videoUrl}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
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
              <span>تصفح كتب الشيخ في sarhaan.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
