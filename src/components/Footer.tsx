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
                <button onClick={() => onNavigate('hadeeth')} className="hover:text-amber-300 font-bold transition-colors cursor-pointer flex items-center gap-1">
                  <span>موسوعة الحديث النبوي (72 لغة)</span>
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
                <button onClick={() => onNavigate('schedule')} className="hover:text-white transition-colors cursor-pointer">
                  جدول اللقاءات الأسبوعية
                </button>
              </li>
            </ul>
          </div>

          {/* Official Websites Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              المواقع الرسمية المعتمدة
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={INSTITUTE_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="overflow-hidden">
                  <span className="block font-bold text-white">الموقع الرسمي للمعهد</span>
                  <span className="text-[11px] text-stone-400 font-mono">{INSTITUTE_INFO.officialWebsiteDisplay}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 mr-auto text-stone-500" />
              </a>

              <a
                href="https://sarhaan.com/hadeeth/ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-900/50 text-emerald-200 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <div className="overflow-hidden">
                  <span className="block font-bold text-emerald-100">موسوعة أحاديث النبي ﷺ</span>
                  <span className="text-[11px] text-emerald-300/80 font-mono">sarhaan.com/hadeeth</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 mr-auto text-emerald-400" />
              </a>

              <a
                href={INSTITUTE_INFO.booksWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/40 border border-amber-900/50 text-amber-200 hover:text-white transition-colors"
              >
                <BookMarked className="w-4 h-4 text-amber-400" />
                <div className="overflow-hidden">
                  <span className="block font-bold text-amber-100">موقع الكتب والمؤلفات</span>
                  <span className="text-[11px] text-amber-300/80 font-mono">{INSTITUTE_INFO.booksWebsiteDisplay}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 mr-auto text-amber-400" />
              </a>
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
