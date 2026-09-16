import React, { useState } from 'react';
import { 
  BookMarked, 
  ExternalLink, 
  Search, 
  Download, 
  FileText, 
  Sparkles, 
  Layers, 
  Check, 
  ArrowUpRight,
  Compass,
  Library
} from 'lucide-react';
import { Book } from '../types';
import { BOOKS_LIST, INSTITUTE_INFO } from '../data/mockData';

export const BooksSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع الكتب والمؤلفات' },
    { id: 'العقيدة والتوحيد', label: 'العقيدة والتوحيد' },
    { id: 'الفقه الإسلامي', label: 'الفقه الإسلامي' },
    { id: 'الحديث الشريف', label: 'الحديث الشريف' },
  ];

  const filteredBooks = BOOKS_LIST.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.title.includes(searchTerm) || 
                          book.description.includes(searchTerm) ||
                          book.features.some(f => f.includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Prominent Direct Banner for sarhaan.com */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-amber-100 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>المكتبة الرسمية المعتمدة للمؤلفات والكتب</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-amiri leading-tight">
            موقع الكتب والمؤلفات لفضيلة الشيخ هيثم سرحان
          </h1>

          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            جميع متون ومؤلفات وتحقيقات فضيلة الشيخ متاحة مجاناً بصيغ رقمية عالية الجودة، ومترجمة لعدة لغات مع الخرائط الذهنية والجداول المنظمة، عبر البوابة المباشرة:
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <a
              id="sarhaan-big-direct-button"
              href={INSTITUTE_INFO.booksWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-stone-950 hover:bg-stone-900 text-amber-300 font-bold text-sm sm:text-base shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Library className="w-5 h-5 text-amber-400" />
              <span>زيارة موقع الكتب المباشر: {INSTITUTE_INFO.booksWebsiteDisplay}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <span className="text-xs text-amber-200/90 font-medium">
              • تحميل مجاني لجميع المتون والكتب بصيغة PDF
            </span>
          </div>
        </div>

        {/* Decorative graphic element */}
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Search & Category Filter */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في الكتب والمؤلفات..."
            className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-amber-600 transition-colors"
          />
          <Search className="w-5 h-5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
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

      {/* Catalog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl border border-stone-200 hover:border-amber-400 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Category Badge & Pages */}
              <div className="flex items-center justify-between text-xs">
                <span className="bg-amber-50 text-amber-800 border border-amber-200/70 px-2.5 py-0.5 rounded-md font-medium">
                  {book.category}
                </span>
                <span className="text-stone-400">
                  {book.pages} صفحة
                </span>
              </div>

              {/* Book Header */}
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-amiri group-hover:text-amber-900 transition-colors leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  إعداد وتحقيق: {book.author}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-stone-600 leading-relaxed">
                {book.description}
              </p>

              {/* Key Features / Mindmaps */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <span className="text-[11px] font-bold text-stone-700 block">
                  مزايا النسخة والمنهج:
                </span>
                {book.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-emerald-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <a
                href={book.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow-sm transition-all active:scale-95"
              >
                <span>الاطلاع والتحميل عبر sarhaan.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note on Free Distribution */}
      <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center text-xs text-amber-900 leading-relaxed max-w-3xl mx-auto space-y-1">
        <p className="font-bold text-sm">
          مؤلفات الشيخ وقف لله تعالى لنشر العلم النافع
        </p>
        <p>
          يُسمح بطباعة ونشر وتوزيع جميع الكتب والرسائل العلمية دون تحريف أو تغيير، ابتغاء الأجر والثواب ونفع المسلمين.
        </p>
      </div>
    </div>
  );
};
