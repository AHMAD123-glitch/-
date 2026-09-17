import React from 'react';
import { 
  Sparkles, 
  Globe, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  AlertCircle, 
  Layers, 
  Languages, 
  CheckCircle2,
  Headphones
} from 'lucide-react';
import { INSTITUTE_INFO, HADEETH_ENCYCLOPEDIA_INFO } from '../data/mockData';

interface HadeethEncyclopediaSectionProps {
  onNavigateOfficial?: () => void;
}

export const HadeethEncyclopediaSection: React.FC<HadeethEncyclopediaSectionProps> = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-5xl mx-auto">
      
      {/* Primary Status Banner: Coming Soon Notice */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 border-2 border-amber-600/50 text-stone-100 p-6 sm:p-10 shadow-2xl">
        <div className="relative z-10 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-bold">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>قريباً بإذن الله تعالى — القسم قيد المراجعة والتطوير</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold font-amiri text-white tracking-wide leading-tight">
              قريباً بإذن الله — موسوعة الحديث النبوي
            </h1>
            <p className="text-base sm:text-xl text-amber-200 font-medium">
              مشروع علمي عالمي مؤصل لخدمة السنة النبوية المطهرة
            </p>
          </div>

          {/* Official Directive Explanation Notice */}
          <div className="bg-stone-900/90 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
              <span>تنويه معتمد من إدارة المعهد:</span>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              «قريباً بإذن الله — موسوعة الحديث النبوي». لا نربطه ولا نعرضه حتى إشعار آخر، حرصاً على إتمام المراجعة والتحرير والتأصيل العلمي التام، بينما يمكنكم متابعة كافة الدروس والمحاضرات والمتون المشروحة المعتمدة لفضيلة الشيخ هيثم بن محمد جميل سرحان عبر الموقع الرسمي المعتمد والجاهز أدناه.
            </p>
          </div>

          {/* Key Metrics / Scope Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                3,582
              </span>
              <span className="text-xs text-stone-300 mt-1 block">حديثاً نبوياً مؤصلاً</span>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 text-center">
              <span className="block text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                72
              </span>
              <span className="text-xs text-stone-300 mt-1 block">لغة عالمية معتمدة</span>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 text-center">
              <span className="block text-lg sm:text-xl font-bold font-amiri text-white">
                شروح ومعانٍ
              </span>
              <span className="text-xs text-stone-300 mt-1 block">وفوائد عقدية وفقهية</span>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 text-center">
              <span className="block text-lg sm:text-xl font-bold font-amiri text-amber-300">
                قريباً بإذن الله
              </span>
              <span className="text-xs text-stone-300 mt-1 block">إطلاق رسمي للجمهور</span>
            </div>
          </div>

        </div>
      </section>

      {/* Official Approved Ready Website Spotlight */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 border-2 border-emerald-600/70 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-5">
        <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>الموقع الرسمي المعتمد والجاهز حالياً ✅</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-amiri text-white">
            دروس ومحاضرات فضيلة الشيخ هيثم سرحان عبر {INSTITUTE_INFO.officialWebsiteDisplay}
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            الموقع الرسمي لمعهد السنة جاهز ومكتمل ونظيف تماماً، ويحتوي على كافة الدروس التأصيلية، وشروحات كتب العقيدة والفقه والحديث، والتسجيلات المرئية والصوتية لفضيلة الشيخ حفظه الله.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            id="mahadsunnah-hadeeth-redirect-btn"
            href={INSTITUTE_INFO.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <Globe className="w-5 h-5" />
            <span>زيارة الموقع الرسمي المعتمد: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Planned Encyclopedia Content Cards */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold font-amiri text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>ماذا ستتضمن موسوعة الحديث النبوي عند اكتمالها؟</span>
          </h3>
          <p className="text-xs text-stone-500">
            أبرز المزايا والخصائص العلمية الجاري إعدادها ومراجعتها بدقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>3,582 حديثاً معتمداً ومشروحاً</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              شاملة للأحاديث الصحيحة والحسنة في العقيدة والعبادات والمعاملات والآداب، مع بيان غريب الألفاظ والفوائد التربوية.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Languages className="w-4 h-4 text-emerald-600" />
              <span>الترجمة لـ 72 لغة عالمية</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              ترجمة معتمدة للنصوص والفوائد إلى أكثر من 70 لغة حية لتيسير الوصول للسنة النبوية لجميع المسلمين حول العالم.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>بطاقات دعوية وتصميمات للمشاركة</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              توليد بطاقات ملخصة تحتوي على نص الحديث وتخريجه وأهم الفوائد المستنبطة لسهولة تداولها ونشرها في وسائل التواصل.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <Headphones className="w-4 h-4 text-emerald-600" />
              <span>قراءة صوتية وشروح مسموعة</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              تسجيلات صوتية واضحة لقراءة الأحاديث وشروحها بصوت نقي ومتقن لخدمة المستمعين وطلاب العلم.
            </p>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-center text-xs text-amber-900">
          <p className="font-semibold">
            نسأل الله تعالى التوفيق والسداد لإتمام هذا المشروع المبارك، وسنوافيكم برابط التدشين فور اعتماده رسمياً.
          </p>
        </div>
      </section>

    </div>
  );
};
