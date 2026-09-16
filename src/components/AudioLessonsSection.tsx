import React, { useState } from 'react';
import { 
  Headphones, 
  Search, 
  Play, 
  Download, 
  Clock, 
  Calendar, 
  Bookmark, 
  Filter, 
  ExternalLink,
  Layers,
  FolderOpen
} from 'lucide-react';
import { AudioLesson } from '../types';
import { AUDIO_LESSONS, INSTITUTE_INFO } from '../data/mockData';
import { ActiveAudio } from './AudioPlayer';

interface AudioLessonsSectionProps {
  onPlayAudio: (audio: ActiveAudio) => void;
}

export const AudioLessonsSection: React.FC<AudioLessonsSectionProps> = ({ onPlayAudio }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'جميع الدروس' },
    { id: 'aqeedah', label: 'العقيدة والتوحيد' },
    { id: 'tafsir', label: 'التفسير والسور' },
    { id: 'fiqh', label: 'الفقه وأصوله' },
    { id: 'hadith', label: 'الحديث الشريف' },
    { id: 'mutoon', label: 'المتون العلمية' },
    { id: 'seerah', label: 'السيرة والآداب' },
  ];

  const filteredLessons = AUDIO_LESSONS.filter(lesson => {
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    const matchesSearch = lesson.title.includes(searchTerm) || 
                          (lesson.description && lesson.description.includes(searchTerm)) ||
                          (lesson.series && lesson.series.includes(searchTerm)) ||
                          (lesson.surahName && lesson.surahName.includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: string) => {
    if (savedFavorites.includes(id)) {
      setSavedFavorites(savedFavorites.filter(favId => favId !== id));
    } else {
      setSavedFavorites([...savedFavorites, id]);
    }
  };

  const handlePlay = (lesson: AudioLesson) => {
    onPlayAudio({
      title: lesson.title,
      subtitle: `${lesson.sheikh} • ${lesson.categoryLabel}`,
      audioUrl: lesson.audioUrl,
      sourceType: 'lesson'
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 rounded-2xl p-6 sm:p-8 text-stone-100 border border-amber-800/40 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/70 text-amber-300 text-xs font-bold">
              <Headphones className="w-3.5 h-3.5" />
              <span>المكتبة الصوتية لمعهد السنة</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-white">
              الدروس والمحاضرات الصوتية
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              دروس مؤصلة وممنهجة لفضيلة الشيخ هيثم بن محمد جميل سرحان حفظه الله، مرتبة ومبوبة حسب السور والموضوعات الشرعية.
            </p>
          </div>

          <a
            href={INSTITUTE_INFO.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors shrink-0 shadow"
          >
            <span>البث المباشر عبر {INSTITUTE_INFO.officialWebsiteDisplay}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في الدروس بالعنوان، المتن، السورة، أو الموضوع..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-amber-600 transition-colors"
          />
          <Search className="w-5 h-5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Stat */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1">
        <span>عرض {filteredLessons.length} درس صوتي</span>
        <span>مرتبة حسب السور والموضوعات المعتمدة</span>
      </div>

      {/* Lessons List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLessons.map((lesson) => {
          const isFavorited = savedFavorites.includes(lesson.id);
          return (
            <div
              key={lesson.id}
              className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200/70 px-2.5 py-0.5 rounded-md">
                    {lesson.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.duration}
                    </span>
                    <button
                      onClick={() => toggleFavorite(lesson.id)}
                      className={`p-1 transition-colors cursor-pointer ${
                        isFavorited ? 'text-amber-500' : 'text-stone-300 hover:text-stone-500'
                      }`}
                      title={isFavorited ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Lesson Title */}
                <div>
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                    {lesson.title}
                  </h3>
                  {lesson.series && (
                    <p className="text-xs text-emerald-700 font-medium mt-1">
                      {lesson.series}
                    </p>
                  )}
                  {lesson.surahName && (
                    <p className="text-xs text-purple-700 font-medium mt-1">
                      السورة: {lesson.surahName}
                    </p>
                  )}
                </div>

                {/* Description */}
                {lesson.description && (
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {lesson.description}
                  </p>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">
                  {lesson.date}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={lesson.audioUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-stone-400 hover:text-amber-700 hover:bg-stone-100 transition-colors"
                    title="تحميل الدرس MP3"
                  >
                    <Download className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handlePlay(lesson)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>استماع</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLessons.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center text-stone-500 border border-stone-200">
          <FolderOpen className="w-12 h-12 text-stone-300 mx-auto mb-2" />
          <p className="text-sm font-semibold">لم يتم العثور على دروس تطابق بحثك</p>
          <p className="text-xs text-stone-400 mt-1">جرب كلمات بحث مختلفة أو اختر فئة أخرى.</p>
        </div>
      )}
    </div>
  );
};
