import React, { useState } from 'react';
import { 
  Video, 
  Search, 
  Play, 
  Clock, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Film,
  FolderOpen
} from 'lucide-react';
import { VideoLesson } from '../types';
import { VIDEO_LESSONS, INSTITUTE_INFO } from '../data/mockData';

interface VideoLessonsSectionProps {
  onSelectVideo: (video: VideoLesson) => void;
}

export const VideoLessonsSection: React.FC<VideoLessonsSectionProps> = ({ onSelectVideo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');

  const seriesList = [
    'all',
    'سلسلة تأصيل العقيدة',
    'سلسلة المتون العلمية',
    'سلسلة فقه العبادات',
    'سلسلة المعتقد الحق'
  ];

  const filteredVideos = VIDEO_LESSONS.filter(vid => {
    const matchesSeries = selectedSeries === 'all' || vid.series === selectedSeries;
    const matchesSearch = vid.title.includes(searchTerm) || 
                          vid.description.includes(searchTerm) ||
                          vid.tags.some(t => t.includes(searchTerm));
    return matchesSeries && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-950 via-stone-900 to-sky-900 rounded-2xl p-6 sm:p-8 text-stone-100 border border-sky-800/40 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/70 text-sky-300 text-xs font-bold">
              <Film className="w-3.5 h-3.5" />
              <span>المرئيات والشروحات المصورة</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-white">
              الدروس المرئية وسلاسل المتون المنظمة
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              محاضرات مرئية تفاعلية تعتمد العرض التشجيري والخرائط الذهنية المصورة لفضيلة الشيخ هيثم سرحان حفظه الله.
            </p>
          </div>

          <a
            id="official-youtube-channel-header-btn"
            href={INSTITUTE_INFO.officialYouTube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shrink-0 shadow-lg"
          >
            <span>قناة معهد السنة الرسمية (@mahadsunnah)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Direct Channel Link Notification */}
      <div className="bg-stone-900 text-stone-200 border border-stone-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
            ▶
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              القناة الرسمية المعتمدة لفضيلة الشيخ د. هيثم سرحان
            </h4>
            <p className="text-xs text-stone-400">
              جميع الدروس والشروحات المرئية مرتبطة ومتاحة مباشرة عبر قناة معهد السنة: <span className="text-red-400 font-mono font-bold">@mahadsunnah</span>
            </p>
          </div>
        </div>

        <a
          href={INSTITUTE_INFO.officialYouTube}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow shrink-0"
        >
          <span>فتح القناة مباشرة</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في الدروس المرئية..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-sky-600 transition-colors"
          />
          <Search className="w-5 h-5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Series Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {seriesList.map(s => {
            const isSelected = selectedSeries === s;
            return (
              <button
                key={s}
                onClick={() => setSelectedSeries(s)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-700 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {s === 'all' ? 'جميع السلاسل المرئية' : s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVideos.map((video) => (
          <a
            key={video.id}
            href={video.videoUrl || INSTITUTE_INFO.officialYouTube}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col group block no-underline text-inherit"
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-video bg-gradient-to-br from-stone-900 to-sky-950 flex items-center justify-center overflow-hidden">
              {/* Overlay pattern */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Play Button Icon */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-transform">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>

              {/* Badges */}
              <span className="absolute bottom-3 left-3 z-10 px-2 py-1 rounded bg-black/80 text-white text-[11px] font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-sky-400" />
                {video.duration}
              </span>

              <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-stone-900/85 text-stone-200 text-[11px] font-semibold border border-stone-700">
                {video.series}
              </span>

              <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-red-700 text-white text-[10px] font-bold flex items-center gap-1 shadow">
                <span>YouTube: {INSTITUTE_INFO.officialYouTubeDisplay}</span>
              </span>
            </div>

            {/* Content Details */}
            <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
              <div>
                <h3 className="text-base font-bold text-stone-900 group-hover:text-red-700 transition-colors leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-2">
                  {video.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">
                  {video.sheikh}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <span>مشاهدة الدرس على يوتيوب</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center text-stone-500 border border-stone-200">
          <FolderOpen className="w-12 h-12 text-stone-300 mx-auto mb-2" />
          <p className="text-sm font-semibold">لم يتم العثور على شروحات مرئية</p>
          <p className="text-xs text-stone-400 mt-1">تأكد من كتابة مصطلح البحث بشكل صحيح.</p>
        </div>
      )}
    </div>
  );
};
