import React from 'react';
import { 
  Info, 
  Target, 
  Compass, 
  BookOpen, 
  ExternalLink, 
  CheckCircle, 
  Scroll, 
  Award,
  Globe,
  Mail,
  UserCheck
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Info className="w-3.5 h-3.5" />
            <span>التعريف بمعهد السنة</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-stone-900 leading-tight">
            عن معهد السنة والمنهج العلمي المؤصل
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            مشروع تعليمي شرعي مستقل يُعنى بتدريس العلوم الشرعية التأصيلية وتيسير المتون العلمية لطلاب العلم والمسلمين عامة، وفق منهج السلف الصالح.
          </p>
        </div>
      </div>

      {/* Word of the Supervisor */}
      <section className="bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 rounded-2xl p-6 sm:p-10 text-stone-100 border border-emerald-800/40 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-amber-300 shadow">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-emerald-400 font-bold tracking-wider uppercase block">
                كلمة المشرف العام على المعهد
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-amiri text-white">
                {INSTITUTE_INFO.supervisor}
              </h2>
            </div>
          </div>

          <div className="border-r-2 border-amber-400 pr-4 my-4">
            <p className="font-amiri text-base sm:text-lg text-stone-200 leading-loose whitespace-pre-line">
              {INSTITUTE_INFO.supervisorWord}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-emerald-900/60 text-xs text-stone-300">
            <a 
              href={INSTITUTE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>الموقع الرسمي: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a 
              href={INSTITUTE_INFO.booksWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
            >
              <Scroll className="w-4 h-4" />
              <span>موقع الكتب والمؤلفات: {INSTITUTE_INFO.booksWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-stone-900 font-amiri">
            رسالتنا
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            {INSTITUTE_INFO.mission}
          </p>
        </div>

        {/* Educational Method Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-stone-900 font-amiri">
            منهجنا التعليمي (التشجير والخرائط الذهنية)
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            يرتكز المعهد على التدرج في العلوم الشرعية، واستخدام أحدث الوسائل البصرية كالخرائط الذهنية والجداول المنظمة التي صممها وحققها فضيلة الشيخ هيثم سرحان؛ ليسهل على المتعلم الربط بين المسائل وأدلتها الشرعية من غير تشويش.
          </p>
        </div>
      </div>

      {/* Strategic Goals */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-900 font-amiri">
              أهداف معهد السنة
            </h3>
            <p className="text-xs text-stone-500">
              الغايات السامية التي يسعى المعهد لتحقيقها خدمةً لدين الله وللمسلمين
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {INSTITUTE_INFO.goals.map((goal, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-emerald-300 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                {goal}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Independent Status & Contact Note */}
      <div className="p-6 rounded-2xl bg-stone-900 text-stone-200 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-right">
          <h4 className="text-base font-bold text-white font-amiri">
            مشروع تطبيقي مستقل ومفتوح للجميع
          </h4>
          <p className="text-xs text-stone-400">
            تنسيق وإشراف تنفيذي: أحمد هليل الذبياني — البريد المعتمد: {INSTITUTE_INFO.officialEmail}
          </p>
        </div>

        <a
          href={`mailto:${INSTITUTE_INFO.officialEmail}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>مراسلة إدارة المعهد</span>
        </a>
      </div>
    </div>
  );
};
