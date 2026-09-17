import React from 'react';
import { 
  BookMarked, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  Library,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export const BooksSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Main Official Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-amber-500/30">
        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>قيد التطوير والتجهيز العلمي المعتمد</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-amiri leading-tight text-white">
            قريباً بإذن الله — مكتبة المؤلفات
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            المكتبة الرقمية التخصصية لمؤلفات وشروحات وتحقيقات فضيلة الشيخ هيثم بن محمد جميل سرحان حفظه الله، المشرف العام على معهد السنة.
          </p>

          {/* Official Administrative Notice */}
          <div className="bg-stone-900/90 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
              <span>بيان رسمي صادر عن إدارة معهد السنة:</span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              «قريباً بإذن الله — مكتبة المؤلفات». يجري العمل حالياً على تدقيق وفهرسة وإخراج الإصدارات الرقمية المعتمدة للمتون المشجرة والخرائط الذهنية بإشراف فضيلة الشيخ وإدارة المعهد، وقد تم إيقاف أي روابط أو استدعاءات خارجية حتى اكتمال الاعتماد الرسمي التام، والاعتماد حصراً على الموقع الرسمي الآمن والنظيف.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              id="mahadsunnah-books-official-link"
              href={INSTITUTE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Library className="w-5 h-5" />
              <span>الموقع الرسمي المعتمد: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <span className="text-xs text-stone-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>المصدر الآمن والنظيف الحصري لمعهد السنة</span>
            </span>
          </div>
        </div>

        {/* Decorative graphic background */}
        <div className="absolute -left-12 -bottom-12 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Planned Library Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-stone-900 font-amiri">
            المتون المشجرة والخرائط الذهنية
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            تقريب العلوم الشرعية عبر جداول وخرائط مبتكرة تيسر الحفظ والاستيعاب للمبتدئ وتضبط المسائل للمنتهي.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-stone-900 font-amiri">
            تحقيقات علمية مؤصلة
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            شروح مؤصلة على الأصول الثلاثة، وكتاب التوحيد، والقواعد الأربع، ونواقض الإسلام، والأربعين النووية، وغيرها.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3 sm:col-span-2 lg:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-stone-900 font-amiri">
            ترجمات عالمية بعدة لغات
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            ترجمة معاني الشروح والكتب إلى أكثر من 70 لغة حية لتصل رسالة التوحيد والسنة إلى العالم بأسره.
          </p>
        </div>
      </div>

      {/* Reaffirmation box */}
      <div className="p-6 rounded-2xl bg-stone-100 border border-stone-200 text-center text-xs text-stone-600 leading-relaxed max-w-2xl mx-auto space-y-2">
        <p className="font-bold text-stone-800 text-sm">
          جميع مصادر وتحديثات المعهد متاحة عبر البوابة الرسمية
        </p>
        <p>
          الموقع الآمن والنظيف المعتمد حصرياً: <span className="font-mono text-emerald-700 font-bold">https://mahadsunnah.com</span>
        </p>
      </div>
    </div>
  );
};
