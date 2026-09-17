import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Headphones, 
  ExternalLink, 
  Globe, 
  Share2, 
  Check, 
  Copy, 
  Sparkles, 
  Play, 
  Layers, 
  Award, 
  Video, 
  ArrowUpRight,
  Filter,
  Bookmark,
  ChevronDown,
  Info,
  Languages
} from 'lucide-react';
import { HadeethItem } from '../types';
import { HADEETH_ENCYCLOPEDIA_INFO, SAMPLE_HADEETHS, HADEETH_LANGUAGES } from '../data/mockData';
import { ActiveAudio } from './AudioPlayer';

interface HadeethEncyclopediaSectionProps {
  onPlayAudio: (audio: ActiveAudio) => void;
}

export const HadeethEncyclopediaSection: React.FC<HadeethEncyclopediaSectionProps> = ({ onPlayAudio }) => {
  const [activeSubTab, setActiveSubTab] = useState<'read' | 'search' | 'cards' | 'languages'>('read');
  const [selectedHadeeth, setSelectedHadeeth] = useState<HadeethItem>(SAMPLE_HADEETHS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedCardId, setCopiedCardId] = useState<string | null>(null);

  const chapters = [
    'all',
    'كتاب الإيمان والنية',
    'كتاب الإيمان والعقيدة',
    'كتاب أركان الإسلام',
    'كتاب الآداب ومحاسن الأخلاق',
    'كتاب حقوق المسلم والأخوة الإيمانية'
  ];

  const filteredHadeeths = SAMPLE_HADEETHS.filter(item => {
    const matchesChapter = selectedChapter === 'all' || item.chapter === selectedChapter;
    const matchesSearch = item.title.includes(searchTerm) || 
                          item.text.includes(searchTerm) || 
                          item.rawi.includes(searchTerm) ||
                          item.source.includes(searchTerm) ||
                          item.explanation.includes(searchTerm);
    return matchesChapter && matchesSearch;
  });

  const handleCopyText = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleCopyCard = (hadeeth: HadeethItem) => {
    const cardText = `قال رسول الله ﷺ:\n${hadeeth.text}\n\nالراوي: ${hadeeth.rawi}\nالمصدر: ${hadeeth.source}\nالدرجة: ${hadeeth.takhrij}\n\nمن فوائد الحديث:\n${hadeeth.benefits.map(b => '• ' + b).join('\n')}\n\nعبر موسوعة أحاديث النبي ﷺ: https://sarhaan.com/hadeeth/ar/`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(cardText);
      setCopiedCardId(hadeeth.id);
      setTimeout(() => setCopiedCardId(null), 2500);
    }
  };

  const handlePlay = (item: HadeethItem) => {
    if (item.audioUrl) {
      onPlayAudio({
        title: item.title,
        subtitle: `${item.source} • ${item.rawi}`,
        audioUrl: item.audioUrl,
        sourceType: 'lesson'
      });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950 border border-emerald-700/50 text-stone-100 p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 max-w-4xl space-y-5">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>مشروع عالمي لخدمة السنة النبوية</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>متاحة بـ 72 لغة عالمية</span>
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-amiri text-white tracking-wide leading-tight">
              {HADEETH_ENCYCLOPEDIA_INFO.title}
            </h1>
            <p className="text-sm sm:text-lg text-emerald-200/90 font-medium">
              {HADEETH_ENCYCLOPEDIA_INFO.subtitle} — {HADEETH_ENCYCLOPEDIA_INFO.supervisor}
            </p>
          </div>

          {/* Description */}
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {HADEETH_ENCYCLOPEDIA_INFO.description}
          </p>

          {/* Key Metrics / Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-stone-900/80 border border-emerald-800/60 rounded-2xl p-3.5 text-center shadow">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                {HADEETH_ENCYCLOPEDIA_INFO.totalHadeeths}
              </span>
              <span className="text-[11px] text-stone-300 mt-1 block">حديثاً مشروحاً ومؤصلاً</span>
            </div>

            <div className="bg-stone-900/80 border border-emerald-800/60 rounded-2xl p-3.5 text-center shadow">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                {HADEETH_ENCYCLOPEDIA_INFO.totalLanguages}
              </span>
              <span className="text-[11px] text-stone-300 mt-1 block">لغة حية حول العالم</span>
            </div>

            <div className="bg-stone-900/80 border border-emerald-800/60 rounded-2xl p-3.5 text-center shadow">
              <span className="block text-xl sm:text-2xl font-bold font-amiri text-white">
                شرح ومعانٍ
              </span>
              <span className="text-[11px] text-stone-300 mt-1 block">وفوائد عقدية وفقهية</span>
            </div>

            <div className="bg-stone-900/80 border border-emerald-800/60 rounded-2xl p-3.5 text-center shadow">
              <span className="block text-xl sm:text-2xl font-bold font-amiri text-amber-300">
                مجاناً 100%
              </span>
              <span className="text-[11px] text-stone-300 mt-1 block">لجميع طلاب العلم والباحثين</span>
            </div>
          </div>

          {/* Direct Primary Action Buttons (External Links) */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-stone-800/80">
            <a
              id="hadeeth-main-link-btn"
              href={HADEETH_ENCYCLOPEDIA_INFO.links.main}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-lg transition-all hover:translate-y-[-1px]"
            >
              <Globe className="w-4 h-4" />
              <span>الصفحة الرئيسية للموسوعة ({HADEETH_ENCYCLOPEDIA_INFO.links.mainDisplay})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              id="hadeeth-ar-link-btn"
              href={HADEETH_ENCYCLOPEDIA_INFO.links.arabic}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg transition-all hover:translate-y-[-1px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>النسخة العربية المباشرة ({HADEETH_ENCYCLOPEDIA_INFO.links.arabicDisplay})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              id="quran-encyclopedia-link-btn"
              href={HADEETH_ENCYCLOPEDIA_INFO.links.quranEncyclopedia}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800/90 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>موسوعة القرآن الكريم</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

        </div>
      </section>

      {/* Intro Video from Sheikh Haitham Sarhan */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                فيديو تعريفي بالموسوعة
              </span>
              <h3 className="text-base sm:text-lg font-bold font-amiri text-stone-900 mt-0.5">
                {HADEETH_ENCYCLOPEDIA_INFO.introVideo.title}
              </h3>
            </div>
          </div>

          <a
            href={HADEETH_ENCYCLOPEDIA_INFO.links.arabic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 font-bold"
          >
            <span>زيارة الموسوعة الكاملة</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Embed Frame */}
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-lg">
          <iframe
            src={HADEETH_ENCYCLOPEDIA_INFO.introVideo.embedUrl}
            title={HADEETH_ENCYCLOPEDIA_INFO.introVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
        <p className="text-xs text-stone-500 text-center">
          {HADEETH_ENCYCLOPEDIA_INFO.introVideo.description}
        </p>
      </section>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 border-b border-stone-200">
        <button
          onClick={() => setActiveSubTab('read')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'read'
              ? 'bg-emerald-800 text-amber-300 shadow-md border border-emerald-600'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📖 قراءة والاستماع للأحاديث</span>
        </button>

        <button
          onClick={() => setActiveSubTab('search')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'search'
              ? 'bg-emerald-800 text-amber-300 shadow-md border border-emerald-600'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>🔍 بحث متقدم في الموسوعة</span>
        </button>

        <button
          onClick={() => setActiveSubTab('cards')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'cards'
              ? 'bg-emerald-800 text-amber-300 shadow-md border border-emerald-600'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Share2 className="w-4 h-4" />
          <span>🎨 بطاقات أحاديث جاهزة للمشاركة</span>
        </button>

        <button
          onClick={() => setActiveSubTab('languages')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'languages'
              ? 'bg-emerald-800 text-amber-300 shadow-md border border-emerald-600'
              : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>🌍 دعم اللغات المختلفة (72 لغة)</span>
        </button>
      </div>

      {/* Sub-Tab 1: Read & Listen (قراءة والاستماع للأحاديث) */}
      {activeSubTab === 'read' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
          {/* Left Column: List of sample Hadeeths */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-stone-900">
                  نماذج من أحاديث الموسوعة المعتمدة
                </h4>
                <span className="text-[11px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                  {SAMPLE_HADEETHS.length} أحاديث
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                اختر الحديث للاطلاع على شرحه ومعاني مفرداته وفوائده المستنبطة.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-2 border border-stone-200 shadow-sm max-h-[580px] overflow-y-auto space-y-2">
              {SAMPLE_HADEETHS.map((item) => {
                const isCurrent = selectedHadeeth.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedHadeeth(item)}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                      isCurrent
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-xs'
                        : 'bg-white border-transparent hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        حديث #{item.number}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {item.source}
                      </span>
                    </div>

                    <h5 className="text-xs font-bold text-stone-900 mt-2 font-amiri leading-snug">
                      {item.title}
                    </h5>

                    <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                      عن {item.rawi}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Hadeeth View with Tafseer & Meaning */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              
              {/* Hadeeth Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                    {selectedHadeeth.chapter}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-amiri text-stone-900">
                    {selectedHadeeth.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {selectedHadeeth.audioUrl && (
                    <button
                      onClick={() => handlePlay(selectedHadeeth)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow transition-colors cursor-pointer"
                    >
                      <Headphones className="w-4 h-4" />
                      <span>استماع صوتي</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleCopyText(selectedHadeeth.text, selectedHadeeth.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer"
                    title="نسخ نص الحديث"
                  >
                    {copiedId === selectedHadeeth.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Matn (نص الحديث الشريف) */}
              <div className="bg-gradient-to-br from-amber-50/60 to-stone-50 p-6 rounded-2xl border border-amber-200/80 shadow-xs relative">
                <div className="flex items-center justify-between text-xs text-amber-900 font-bold mb-3">
                  <span>عن {selectedHadeeth.rawi}:</span>
                  <span className="font-mono text-stone-500">{selectedHadeeth.takhrij}</span>
                </div>
                
                <p className="font-amiri text-lg sm:text-2xl text-stone-900 leading-loose text-right font-semibold">
                  {selectedHadeeth.text}
                </p>

                <div className="mt-4 pt-3 border-t border-amber-200/60 text-xs text-stone-500 flex items-center justify-between">
                  <span>المصدر: {selectedHadeeth.source}</span>
                  <span className="text-emerald-700 font-medium">موسوعة أحاديث النبي ﷺ</span>
                </div>
              </div>

              {/* Meanings of Rare Words (معاني المفردات) */}
              {selectedHadeeth.meanings && selectedHadeeth.meanings.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-4 bg-amber-600 rounded-sm"></span>
                    <span>معاني المفردات والكلمات الغريبة:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedHadeeth.meanings.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs">
                        <span className="font-bold text-emerald-800 ml-1">«{m.word}»:</span>
                        <span className="text-stone-700">{m.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Explanation (الشرح الإجمالي) */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-2 h-4 bg-emerald-600 rounded-sm"></span>
                  <span>الشرح والبيان التأصيلي:</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
                  {selectedHadeeth.explanation}
                </p>
              </div>

              {/* Benefits (الفوائد والأحكام المستنبطة) */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <span className="w-2 h-4 bg-teal-600 rounded-sm"></span>
                  <span>الفوائد والأحكام المستنبطة من الحديث:</span>
                </h4>
                <div className="space-y-2">
                  {selectedHadeeth.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* English Translation Sample */}
              {selectedHadeeth.englishText && (
                <div className="p-4 rounded-2xl bg-stone-100 text-xs text-stone-700 space-y-1 font-sans border border-stone-200" dir="ltr">
                  <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wide">
                    English Translation (Sample of 72 Languages):
                  </span>
                  <p className="leading-relaxed italic text-stone-800">
                    "{selectedHadeeth.englishText}"
                  </p>
                </div>
              )}

              {/* Direct Full Encyclopedia Button */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-stone-500">
                  تصفح كافة الأحاديث البالغ عددها 3,582 حديثاً في الموسوعة الإلكترونية:
                </span>
                <a
                  href={HADEETH_ENCYCLOPEDIA_INFO.links.arabic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow transition-colors"
                >
                  <span>فتح هذا الحديث في الموسوعة الرسمية</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Advanced Search (بحث متقدم في الموسوعة) */}
      {activeSubTab === 'search' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          {/* Search Inputs & Filters */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base font-amiri">
              <Search className="w-5 h-5 text-emerald-600" />
              <span>البحث المتقدم في نصوص الأحاديث والشروح والفوائد</span>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث بكلمة من متن الحديث، الراوي، الموضوع، أو الشرح..."
                className="w-full pl-4 pr-11 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors shadow-inner"
              />
              <Search className="w-5 h-5 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category Filter Chips */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-stone-500 block">
                تصفية حسب الأبواب والموضوعات:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {chapters.map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setSelectedChapter(ch)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      selectedChapter === ch
                        ? 'bg-emerald-700 text-white font-bold shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {ch === 'all' ? 'جميع الأبواب' : ch}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Results List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-stone-500 px-2">
              <span>نتائج البحث المباشرة ({filteredHadeeths.length} حديث)</span>
              <span>مستخرجة من قاعدة بيانات موسوعة الحديث النبوي</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHadeeths.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-300 shadow-sm transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        {item.chapter}
                      </span>
                      <span className="text-stone-400 font-mono text-[11px]">
                        {item.source}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 font-amiri leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-700 font-amiri leading-loose line-clamp-3 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      {item.text}
                    </p>

                    <p className="text-xs text-stone-500 line-clamp-2">
                      {item.explanation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedHadeeth(item);
                        setActiveSubTab('read');
                      }}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                    >
                      <span>عرض الشرح والفوائد الكاملة</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleCopyCard(item)}
                      className="p-1.5 text-stone-400 hover:text-amber-600 transition-colors cursor-pointer"
                      title="مشاركة الحديث"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Sub-Tab 3: Shareable Cards (بطاقات أحاديث جاهزة للمشاركة) */}
      {activeSubTab === 'cards' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
            <h3 className="text-lg font-bold font-amiri text-stone-900">
              بطاقات دعوية جاهزة للمشاركة والنشر
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              تصاميم أنيقة للأحاديث النبوية الشريفة مع فوائدها وتخريجها المعتمد، بنقرة واحدة لنسخها ومشاركتها عبر الواتساب وتطبيقات التواصل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_HADEETHS.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 rounded-3xl p-6 text-stone-100 border border-emerald-800/60 shadow-xl flex flex-col justify-between space-y-5 relative overflow-hidden"
              >
                {/* Decorative header */}
                <div className="flex items-center justify-between border-b border-emerald-800/40 pb-3 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>حديث شريف</span>
                  </div>
                  <span className="text-stone-400 font-mono text-[11px]">
                    {item.source}
                  </span>
                </div>

                {/* Hadeeth Matn */}
                <div className="space-y-3">
                  <p className="font-amiri text-base sm:text-lg text-white font-bold leading-loose text-center py-2">
                    {item.text}
                  </p>
                  <p className="text-[11px] text-emerald-300 text-center">
                    رواه {item.rawi} — {item.takhrij}
                  </p>
                </div>

                {/* Benefits Pill */}
                <div className="bg-emerald-950/70 border border-emerald-800/60 rounded-xl p-3 text-[11px] text-stone-300 space-y-1">
                  <span className="font-bold text-amber-300 block text-[10px]">
                    من الفوائد المستنبطة:
                  </span>
                  <p className="leading-relaxed line-clamp-2">
                    {item.benefits[0]}
                  </p>
                </div>

                {/* Card Footer & Share Action */}
                <div className="pt-3 border-t border-emerald-900/60 flex items-center justify-between">
                  <span className="text-[10px] text-stone-400 font-mono">
                    sarhaan.com/hadeeth
                  </span>

                  <button
                    id={`share-card-${item.id}`}
                    onClick={() => handleCopyCard(item)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    {copiedCardId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>تم النسخ بنجاح!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>نسخ ومشاركة البطاقة</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Tab 4: Languages Support (دعم اللغات المختلفة - 72 لغة) */}
      {activeSubTab === 'languages' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          
          <div className="bg-gradient-to-r from-emerald-900 to-stone-900 rounded-3xl p-6 sm:p-8 text-stone-100 border border-emerald-700/50 shadow-md">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 text-emerald-300 text-xs font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>الترجمة العالمية المعتمدة</span>
              </div>
              <h3 className="text-2xl font-bold font-amiri text-white">
                موسوعة الحديث النبوي بـ 72 لغة عالمية
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                تُرجمت شروح الأحاديث ومعانيها بواسطة نخبة من المترجمين وطلبة العلم المؤهلين؛ لنشر نور السنة النبوية لغير الناطقين بالعربية في كل قارات العالم.
              </p>
            </div>
          </div>

          {/* Languages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
            {HADEETH_LANGUAGES.map((lang) => (
              <a
                key={lang.code}
                href={lang.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-4 border border-stone-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <h5 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800">
                      {lang.name}
                    </h5>
                    <span className="text-[11px] text-stone-400 font-sans">
                      {lang.english}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-700 transition-colors" />
              </a>
            ))}
          </div>

          {/* Full List Callout */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center text-xs text-amber-900 space-y-2 max-w-2xl mx-auto">
            <p className="font-bold text-sm">
              هل تبحث عن لغة أخرى ضمن الـ 72 لغة؟
            </p>
            <p className="text-stone-600">
              يمكنك تصفح القائمة الكاملة للغات في الصفحة الرئيسية للموسوعة والانتقال المباشر لأي لغة ترغب بها.
            </p>
            <a
              href={HADEETH_ENCYCLOPEDIA_INFO.links.main}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow transition-colors mt-2"
            >
              <span>استعراض كافة اللغات في sarhaan.com/hadeeth</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* Official Links Footer Bar */}
      <section className="p-6 rounded-3xl bg-stone-900 text-stone-200 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-right">
          <h4 className="text-sm sm:text-base font-bold text-white font-amiri">
            موسوعة أحاديث النبي ﷺ — وقف لله تعالى لخدمة الإسلام
          </h4>
          <p className="text-xs text-stone-400">
            إشراف فضيلة الشيخ هيثم بن محمد جميل سرحان حفظه الله — جميع الحقوق محفوظة ومتاحة للنشر والدعوة
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={HADEETH_ENCYCLOPEDIA_INFO.links.arabic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
          >
            <span>sarhaan.com/hadeeth/ar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={HADEETH_ENCYCLOPEDIA_INFO.links.quranEncyclopedia}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700 transition-colors"
          >
            <span>موسوعة القرآن الكريم</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};
