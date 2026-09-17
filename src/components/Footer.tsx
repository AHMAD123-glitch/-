import React from 'react';
import { ExternalLink, Mail, Globe, BookMarked, Heart, Shield } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';
import { TabType } from '../types';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-emerald-950 pt-12 pb-24 lg:pb-12 text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Supervisor */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 border border-emerald-500/40 flex items-center justify-center text-amber-300 text-xl font-bold font-amiri shadow">
                س
              </div>
              <span className="font-amiri text-2xl font-bold text-white">
                {INSTITUTE_INFO.name}
              </span>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              {INSTITUTE_INFO.supervisor}
            </p>

            <p className="text-xs text-stone-500 leading-relaxed">
              مشروع علمي مستقل لخدمة طلاب العلم ونشر العقيدة الصحيحة والمتون المشجرة في أرجاء المعمورة.
            </p>
          </div>

          {/* Core Sections Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              أقسام التطبيق
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  عن المعهد ورسالتنا
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quran')} className="hover:text-white transition-colors cursor-pointer">
                  القرآن الكريم وتفسيره
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hadeeth')} className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1 text-stone-400">
                  <span>قريباً بإذن الله — موسوعة الحديث النبوي</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('audio')} className="hover:text-white transition-colors cursor-pointer">
                  الدروس والمحاضرات الصوتية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('video')} className="hover:text-white transition-colors cursor-pointer">
                  الدروس المرئية وسلاسل المتون
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('books')} className="hover:text-amber-300 transition-colors cursor-pointer text-stone-400">
                  قريباً بإذن الله
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('schedule')} className="hover:text-white transition-colors cursor-pointer">
                  جدول اللقاءات الأسبوعية
                </button>
              </li>
            </ul>
          </div>

          {/* Official Websites & Channels Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              الروابط الرسمية المعتمدة
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={INSTITUTE_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 text-emerald-200 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="block font-bold text-white">الموقع الرسمي للمعهد</span>
                    <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1 rounded">معتمد ✅</span>
                  </div>
                  <span className="text-xs text-emerald-300 font-mono font-semibold">{INSTITUTE_INFO.officialWebsiteDisplay}</span>
                </div>
                <ExternalLink className="w-4 h-4 mr-auto text-emerald-400" />
              </a>

              <a
                href={INSTITUTE_INFO.officialYouTube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-red-950/60 hover:bg-red-900/60 border border-red-700/60 text-red-200 hover:text-white transition-colors"
              >
                <div className="w-5 h-5 rounded bg-red-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                  ▶
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="block font-bold text-white">قناة يوتيوب المعتمدة</span>
                    <span className="text-[10px] bg-red-800 text-red-200 px-1 rounded">رسمية ✅</span>
                  </div>
                  <span className="text-xs text-red-300 font-mono font-semibold">{INSTITUTE_INFO.officialYouTubeDisplay}</span>
                </div>
                <ExternalLink className="w-4 h-4 mr-auto text-red-400" />
              </a>

              <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-400 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>قريباً بإذن الله</span>
                </div>
                <p className="text-[11px] text-stone-400">
                  موسوعة الحديث الشريف ومكتبة المؤلفات: قريباً بإذن الله بعد استكمال المراجعة والتأصيل.
                </p>
              </div>
            </div>
          </div>

          {/* Coordination & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              التواصل والتنسيق
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>البريد المعتمد للمشروع:</p>
              <a 
                href={`mailto:${INSTITUTE_INFO.officialEmail}`}
                className="inline-block font-mono text-amber-300 hover:underline bg-stone-900 px-2.5 py-1.5 rounded-lg border border-stone-800 text-xs"
                dir="ltr"
              >
                {INSTITUTE_INFO.officialEmail}
              </a>
              <p className="pt-2 text-[11px] text-stone-500">
                تنسيق ومتابعة: {INSTITUTE_INFO.developerCredit}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 text-center sm:text-right">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} — تطبيق «{INSTITUTE_INFO.name}»
          </p>
          <p className="text-[11px] text-stone-600">
            بإشراف فضيلة الشيخ / هيثم بن محمد جميل سرحان حفظه الله ورعاه
          </p>
        </div>

      </div>
    </footer>
  );
};
