import React from 'react';
import { 
  BookOpen, 
  Headphones, 
  Video, 
  Calendar, 
  Mail, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  ArrowLeft,
  GraduationCap,
  Scroll,
  Radio,
  BookMarked,
  Globe,
  Check,
  ShieldCheck
} from 'lucide-react';
import { TabType, AudioLesson } from '../types';
import { INSTITUTE_INFO, SCHEDULE_ITEMS, DAILY_BENEFITS, BOOKS_LIST, HADEETH_ENCYCLOPEDIA_INFO } from '../data/mockData';
import { ActiveAudio } from './AudioPlayer';

interface HomeSectionProps {
  onNavigate: (tab: TabType) => void;
  onPlayAudio: (audio: ActiveAudio) => void;
  onOpenVideo: (videoId: string) => void;
  latestAudioLesson: AudioLesson;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ 
  onNavigate, 
  onPlayAudio, 
  latestAudioLesson 
}) => {
  const nextLesson = SCHEDULE_ITEMS[0];
  const featuredBenefit = DAILY_BENEFITS[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Card */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-900 to-stone-950 border border-emerald-800/40 text-stone-100 p-6 sm:p-10 shadow-2xl">
        {/* Subtle Islamic Geometric Accents in background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>مشروع مستقل لنشر العلم الشرعي المؤصل</span>
          </div>

          {/* Titles */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold font-amiri text-white tracking-wide leading-tight">
              أهلاً بكم في تطبيق <span className="text-amber-400 font-extrabold">{INSTITUTE_INFO.name}</span>
            </h1>
            <p className="text-sm sm:text-lg text-emerald-200/90 font-medium">
              {INSTITUTE_INFO.supervisor}
            </p>
          </div>

          {/* Brief */}
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {INSTITUTE_INFO.brief}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              id="hero-mahadsunnah-btn"
              href={INSTITUTE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition-all hover:translate-y-[-1px] cursor-pointer"
            >
              <Globe className="w-4 h-4 text-emerald-100" />
              <span>زيارة الموقع الرسمي المعتمد: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <span className="text-[10px] bg-emerald-800/90 text-emerald-200 border border-emerald-400/40 px-2 py-0.5 rounded-full font-bold">
                جاهز ✅
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="hero-explore-quran-btn"
              onClick={() => onNavigate('quran')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 border border-emerald-700/50 text-emerald-200 font-semibold text-sm transition-all hover:text-white cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>القرآن الكريم وتفسيره</span>
            </button>

            <button
              id="hero-explore-audio-btn"
              onClick={() => onNavigate('audio')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700/80 border border-stone-700 text-stone-200 font-semibold text-sm transition-all hover:text-white cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-amber-400" />
              <span>الدروس والمحاضرات الصوتية</span>
            </button>

            <button
              id="hero-explore-video-btn"
              onClick={() => onNavigate('video')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700/80 border border-stone-700 text-stone-200 font-semibold text-sm transition-all hover:text-white cursor-pointer"
            >
              <Video className="w-4 h-4 text-sky-400" />
              <span>الدروس المرئية والمتون</span>
            </button>
          </div>

          {/* Direct official links pill */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300 border-t border-stone-800/80">
            <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <Check className="w-4 h-4 text-emerald-400" />
              الموقع الرسمي المعتمد (دروس ومحاضرات نظيفة وجاهزة):
              <a href={INSTITUTE_INFO.officialWebsite} target="_blank" rel="noreferrer" className="text-white hover:underline underline-offset-4 font-mono font-bold mr-1">
                {INSTITUTE_INFO.officialWebsiteDisplay}
              </a>
            </span>
            <span>•</span>
            <span>البريد المعتمد: <a href={`mailto:${INSTITUTE_INFO.officialEmail}`} className="text-amber-400 hover:underline font-mono">{INSTITUTE_INFO.officialEmail}</a></span>
          </div>
        </div>
      </section>

      {/* Official Ready Website Banner */}
      <section className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 border-2 border-emerald-600/60 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>الموقع الرسمي المعتمد والجاهز للنشر فوراً ✅</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-amiri text-white">
              دروس ومحاضرات فضيلة الشيخ هيثم سرحان
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              تم اعتماد وربط الموقع الرسمي المعتمد لمعهد السنة <span className="text-amber-300 font-mono font-bold">({INSTITUTE_INFO.officialWebsiteDisplay})</span>، ويضم الدروس العلمية المؤصلة، وشروحات المتون، والتسجيلات الصوتية والمرئية الكاملة بحلة نظيفة وجاهزة تماماً.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="mahadsunnah-spotlight-btn"
              href={INSTITUTE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-sm sm:text-base shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Globe className="w-5 h-5" />
              <span>دخول الموقع الرسمي: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('audio')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-amber-400" />
              <span>الدروس الصوتية بالتطبيق</span>
            </button>
          </div>
        </div>
      </section>

      {/* Up Next Lesson Banner */}
      <section className="bg-gradient-to-r from-emerald-900/30 via-stone-900/40 to-emerald-950/20 border border-emerald-800/30 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-amber-300 shrink-0 shadow">
            <Radio className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                الدرس القادم المجدول
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {nextLesson.day} — {nextLesson.time}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {nextLesson.title}
            </h3>
            <p className="text-xs text-stone-300 mt-0.5">
              الموضوع: {nextLesson.topic} ({nextLesson.platform})
            </p>
          </div>
        </div>

        <button
          id="home-view-schedule-btn"
          onClick={() => onNavigate('schedule')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer"
        >
          <span>جدول اللقاءات الكامل</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </section>

      {/* Core Sections Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-amiri text-stone-900 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-emerald-700 rounded-sm inline-block"></span>
            <span>أقسام ومنصات المعهد التعليمية</span>
          </h2>
          <span className="text-xs text-stone-500">اختر القسم للمطالعة والاستماع</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card: Hadeeth Encyclopedia (Coming Soon) */}
          <div 
            id="portal-card-hadeeth"
            onClick={() => onNavigate('hadeeth')}
            className="group bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950/80 text-white rounded-2xl p-5 border border-amber-600/30 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] bg-amber-900/60 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold">
                  قريباً بإذن الله
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-200 transition-colors font-amiri">
                  قريباً بإذن الله — موسوعة الحديث النبوي
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  مشروع علمي عالمي شامل لخدمة السنة النبوية، غير مفعل ولا مرتبط بأي روابط خارجية حتى إشعار آخر لحين اكتمال المراجعة والاعتماد.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:translate-x-[-4px] transition-transform">
              <span>بيان تفاصيل الموسوعة (قريباً)</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Quran */}
          <div 
            id="portal-card-quran"
            onClick={() => onNavigate('quran')}
            className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                  القرآن الكريم وتفسيره
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  تلاوات خاشعة لكبار القراء مع التفسير الميسر للآيات وعرض مريح للسور المكية والمدنية.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:translate-x-[-4px] transition-transform">
              <span>تصفح المصحف والتفسير</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Audio Lessons */}
          <div 
            id="portal-card-audio"
            onClick={() => onNavigate('audio')}
            className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  الدروس والمحاضرات الصوتية
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  مرتبة حسب السور والمواضيع: العقيدة، الفقه، الحديث، التفسير، والسيرة مع مشغل صوتي عائم.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-700 group-hover:translate-x-[-4px] transition-transform">
              <span>استمع إلى الدروس</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Video Lessons */}
          <div 
            id="portal-card-video"
            onClick={() => onNavigate('video')}
            className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-sky-800 transition-colors">
                  الدروس المرئية وسلاسل المتون
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  فيديوهات وشروح مشجرة مع الخرائط الذهنية التوضيحية لمتون التوحيد والفقه.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-sky-700 group-hover:translate-x-[-4px] transition-transform">
              <span>مشاهدة الدروس المرئية</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Books & Publications (Coming Soon) */}
          <div 
            id="portal-card-books"
            onClick={() => onNavigate('books')}
            className="group bg-white rounded-2xl p-5 border border-amber-300/80 hover:border-amber-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between bg-gradient-to-br from-amber-50/50 to-white"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center">
                  <Scroll className="w-6 h-6" />
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded font-bold">
                  قريباً بإذن الله
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors font-amiri">
                  قريباً بإذن الله — مكتبة المؤلفات
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  يجري إعداد وتدقيق النسخ الرقمية المعتمدة للمتون المشجرة والخرائط الذهنية لفضيلة الشيخ، والاعتماد حصراً على الموقع الرسمي المعتمد mahadsunnah.com.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:translate-x-[-4px] transition-transform">
              <span>تفاصيل مكتبة المؤلفات (قريباً)</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Schedule */}
          <div 
            id="portal-card-schedule"
            onClick={() => onNavigate('schedule')}
            className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-purple-800 transition-colors">
                  جدول اللقاءات والدروس
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  مواعيد الدروس الأسبوعية ومجالس العلم بتوقيت مكة المكرمة وروابط البث المباشر.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-purple-700 group-hover:translate-x-[-4px] transition-transform">
              <span>عرض الجدول الأسبوعي</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Card: Contact */}
          <div 
            id="portal-card-contact"
            onClick={() => onNavigate('contact')}
            className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                  تواصل معنا
                </h3>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                  البريد الرسمي AHMAD12.3@outlook.sa ونموذج المراسلة للاستفسارات والاقتراحات.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:translate-x-[-4px] transition-transform">
              <span>إرسال رسالة أو استفسار</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lesson Quick Player Card */}
      <section className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">
                درس مميز مقترح للاستماع
              </span>
              <h3 className="text-base font-bold text-stone-900">
                {latestAudioLesson.title}
              </h3>
            </div>
          </div>

          <button
            id="play-featured-lesson-btn"
            onClick={() => onPlayAudio({
              title: latestAudioLesson.title,
              subtitle: `${latestAudioLesson.sheikh} • ${latestAudioLesson.categoryLabel}`,
              audioUrl: latestAudioLesson.audioUrl,
              sourceType: 'lesson'
            })}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow cursor-pointer shrink-0"
          >
            <Headphones className="w-4 h-4" />
            <span>تشغيل الآن ({latestAudioLesson.duration})</span>
          </button>
        </div>

        <p className="text-xs text-stone-600 mt-3 leading-relaxed">
          {latestAudioLesson.description}
        </p>
      </section>

      {/* Daily Benefit & Word */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Benefit */}
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200/80 rounded-2xl p-6 relative overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>إضاءة وفائدة إيمانية</span>
          </div>
          <blockquote className="font-amiri text-lg sm:text-xl text-stone-800 leading-relaxed font-semibold">
            « {featuredBenefit.quote} »
          </blockquote>
          <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-900">
            <span className="font-medium">{featuredBenefit.author}</span>
            <span className="text-stone-500">{featuredBenefit.source}</span>
          </div>
        </div>

        {/* About the Supervisor Brief */}
        <div className="bg-gradient-to-br from-emerald-50 to-stone-50 border border-emerald-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>نبذة عن المشرف العام</span>
            </div>
            <h4 className="text-base font-bold text-stone-900 font-amiri">
              فضيلة الشيخ / هيثم بن محمد جميل سرحان حفظه الله
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              من علماء أهل السنة المعروفين بالعناية التامة بتدريس متون العقيدة والتوحيد والفقه، وتميزت دروسه ومؤلفاته باعتماد أسلوب التشجير والخرائط الذهنية لتقريب العلم لطلاب العلم في كل مكان.
            </p>
          </div>

          <div className="pt-4 mt-2 border-t border-emerald-200/60 flex items-center justify-between">
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
            >
              <span>قراءة كلمة المشرف ورسالة المعهد</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <a
              href={INSTITUTE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-emerald-700 flex items-center gap-1"
            >
              <span>{INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
