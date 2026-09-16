import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Headphones, 
  Volume2, 
  BookMarked, 
  Sliders, 
  Sparkles, 
  Layers, 
  Eye, 
  ChevronLeft,
  Info
} from 'lucide-react';
import { QuranSurah } from '../types';
import { QURAN_SURAHS } from '../data/mockData';
import { ActiveAudio } from './AudioPlayer';

interface QuranSectionProps {
  onPlayAudio: (audio: ActiveAudio) => void;
}

export const QuranSection: React.FC<QuranSectionProps> = ({ onPlayAudio }) => {
  const [selectedSurah, setSelectedSurah] = useState<QuranSurah>(QURAN_SURAHS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'مكية' | 'مدنية'>('all');
  const [showTafsir, setShowTafsir] = useState(true);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  const filteredSurahs = QURAN_SURAHS.filter(surah => {
    const matchesSearch = surah.name.includes(searchTerm) || 
                          surah.arabicName.includes(searchTerm) || 
                          surah.number.toString().includes(searchTerm);
    const matchesType = filterType === 'all' || surah.revelationType === filterType;
    return matchesSearch && matchesType;
  });

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xl sm:text-2xl';
      case 'md': return 'text-2xl sm:text-3xl';
      case 'lg': return 'text-3xl sm:text-4xl';
      case 'xl': return 'text-4xl sm:text-5xl';
      default: return 'text-3xl sm:text-4xl';
    }
  };

  const handlePlaySurah = (surah: QuranSurah) => {
    onPlayAudio({
      title: `${surah.name}`,
      subtitle: `تلاوة خاشعة بصوت: ${surah.reciter}`,
      audioUrl: surah.audioUrl,
      sourceType: 'quran'
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-900 rounded-2xl p-6 sm:p-8 text-stone-100 border border-emerald-800/40 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>القرآن الكريم — تلاوة وتفسير</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-white">
              المصحف الشريف والتفسير الميسر
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              تلاوة مباركة بأصوات كبار القراء، مقرونة بالتفسير الميسر للآيات لتدبر كتاب الله عز وجل.
            </p>
          </div>

          {/* Quick Play Selected Surah */}
          <button
            id="play-surah-header-btn"
            onClick={() => handlePlaySurah(selectedSurah)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <Headphones className="w-4 h-4" />
            <span>استمع إلى {selectedSurah.name}</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left/Sidebar: Surahs Index */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm space-y-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث باسم السورة أو رقمها..."
                className="w-full pl-3 pr-9 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Filters (All / Makki / Madani) */}
            <div className="flex items-center gap-1.5 pt-1">
              <button
                onClick={() => setFilterType('all')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filterType === 'all' 
                    ? 'bg-emerald-700 text-white shadow-sm' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                الكل
              </button>
              <button
                onClick={() => setFilterType('مكية')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filterType === 'مكية' 
                    ? 'bg-emerald-700 text-white shadow-sm' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                مكية
              </button>
              <button
                onClick={() => setFilterType('مدنية')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  filterType === 'مدنية' 
                    ? 'bg-emerald-700 text-white shadow-sm' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                مدنية
              </button>
            </div>
          </div>

          {/* Surah List Items */}
          <div className="bg-white rounded-2xl p-2 border border-stone-200 shadow-sm max-h-[560px] overflow-y-auto space-y-1">
            {filteredSurahs.map((surah) => {
              const isCurrent = selectedSurah.number === surah.number;
              return (
                <div
                  key={surah.number}
                  onClick={() => setSelectedSurah(surah)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isCurrent 
                      ? 'bg-emerald-50 border border-emerald-300 text-emerald-950 shadow-xs' 
                      : 'hover:bg-stone-50 border border-transparent text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-amiri font-bold text-xs ${
                      isCurrent ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {surah.number}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-amiri text-stone-900">
                        {surah.name}
                      </h4>
                      <p className="text-[11px] text-stone-500">
                        {surah.revelationType} • {surah.numberOfAyahs} آيات
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlaySurah(surah);
                    }}
                    className={`p-2 rounded-lg transition-colors ${
                      isCurrent 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'text-stone-400 hover:text-emerald-700 hover:bg-stone-100'
                    }`}
                    title="تشغيل التلاوة الصوتية"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Area: Quran Reader & Tafsir */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Reader Controls Bar */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-stone-900 font-amiri">
                {selectedSurah.name} ({selectedSurah.revelationType})
              </span>
              <span className="text-xs text-stone-500">
                • القارئ: {selectedSurah.reciter}
              </span>
            </div>

            {/* Controls: Tafsir toggle & Font Size */}
            <div className="flex items-center gap-3">
              {/* Tafsir Toggle */}
              <button
                onClick={() => setShowTafsir(!showTafsir)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  showTafsir 
                    ? 'bg-amber-100 border-amber-300 text-amber-900' 
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>{showTafsir ? 'إخفاء التفسير' : 'إظهار التفسير الميسر'}</span>
              </button>

              {/* Font Size Selector */}
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
                {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                      fontSize === size ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    {size === 'sm' ? 'ص' : size === 'md' ? 'م' : size === 'lg' ? 'ك' : 'ك+'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Surah Decorative Frame / Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm relative overflow-hidden">
            {/* Islamic decorative border top */}
            <div className="w-full h-1.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-600 rounded-full mb-8"></div>

            {/* Surah Header Ornamental Banner */}
            <div className="text-center space-y-3 mb-10 pb-6 border-b border-stone-200/80">
              <div className="inline-block px-8 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <h2 className="font-amiri text-2xl sm:text-3xl font-bold">
                  {selectedSurah.name}
                </h2>
                <span className="text-xs text-emerald-700 block mt-0.5">
                  آياتها {selectedSurah.numberOfAyahs} • نزلت في {selectedSurah.revelationType === 'مكية' ? 'مكة المكرمة' : 'المدينة المنورة'}
                </span>
              </div>

              {/* Basmala (shown unless Surah At-Tawbah) */}
              {selectedSurah.number !== 9 && (
                <p className="font-amiri text-xl sm:text-2xl text-stone-800 pt-3">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
              )}
            </div>

            {/* Ayahs with Tafsir */}
            <div className="space-y-8">
              {selectedSurah.sampleAyahs && selectedSurah.sampleAyahs.length > 0 ? (
                selectedSurah.sampleAyahs.map((ayah) => (
                  <div 
                    key={ayah.number}
                    className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/70 hover:border-emerald-200 transition-colors space-y-3"
                  >
                    {/* Ayah Text */}
                    <div className="flex items-start justify-between gap-4">
                      <p className={`font-quran text-stone-900 leading-loose text-right flex-1 ${getFontSizeClass()}`}>
                        {ayah.text}
                        <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-900 text-xs font-amiri font-bold mx-2 align-middle border border-emerald-300">
                          {ayah.number}
                        </span>
                      </p>
                    </div>

                    {/* Tafsir Block */}
                    {showTafsir && (
                      <div className="pt-3 border-t border-stone-200/80 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-3 rounded-xl border border-amber-200/50">
                        <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-1 text-xs">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                          <span>التفسير الميسر:</span>
                        </div>
                        <p className="leading-relaxed text-stone-700">
                          {ayah.tafsir}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-stone-500 space-y-3">
                  <BookOpen className="w-10 h-10 text-stone-400 mx-auto" />
                  <p className="text-sm">
                    استمع إلى كامل التلاوة المباركة لسورة {selectedSurah.name} عبر المشغل الصوتي المدمج.
                  </p>
                  <button
                    onClick={() => handlePlaySurah(selectedSurah)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <Headphones className="w-4 h-4" />
                    <span>تشغيل التلاوة كاملة</span>
                  </button>
                </div>
              )}
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-4 border-t border-stone-100 text-center text-xs text-stone-400 flex items-center justify-center gap-1">
              <Info className="w-3.5 h-3.5" />
              <span>التفسير مأخوذ من «التفسير الميسر» المعتمد لدى مجمع الملك فهد لطباعة المصحف الشريف.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
