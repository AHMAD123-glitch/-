import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Radio, 
  ExternalLink, 
  Bell, 
  Share2, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { ScheduleItem } from '../types';
import { SCHEDULE_ITEMS, INSTITUTE_INFO } from '../data/mockData';

export const ScheduleSection: React.FC = () => {
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSchedule = SCHEDULE_ITEMS.filter(item => {
    if (filterPlatform === 'all') return true;
    return item.platform.includes(filterPlatform);
  });

  const handleShare = (item: ScheduleItem) => {
    const text = `📌 موعد درس في معهد السنة:\n${item.title}\nالموضوع: ${item.topic}\nالموعد: ${item.day} - ${item.time}\nرابط المتابعة: ${INSTITUTE_INFO.officialWebsite}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-stone-900 to-purple-900 rounded-2xl p-6 sm:p-8 text-stone-100 border border-purple-800/40 shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/70 text-purple-300 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>الجدول العلمي الأسبوعي</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-white">
              جدول الدروس واللقاءات القادمة
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
              مواعيد مجالس العلم وشروح المتون لفضيلة الشيخ هيثم بن محمد جميل سرحان حفظه الله — جميع المواعيد مدونة بحسب توقيت مكة المكرمة.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-700/50 px-3 py-2 rounded-xl text-xs text-purple-200">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>توقيت مكة المكرمة (GMT +3)</span>
          </div>
        </div>
      </div>

      {/* Platform Filter Buttons */}
      <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterPlatform('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              filterPlatform === 'all' 
                ? 'bg-purple-800 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            جميع الدروس
          </button>
          <button
            onClick={() => setFilterPlatform('بث')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              filterPlatform === 'بث' 
                ? 'bg-purple-800 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            بث مباشر
          </button>
          <button
            onClick={() => setFilterPlatform('حضوري')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              filterPlatform === 'حضوري' 
                ? 'bg-purple-800 text-white shadow-sm' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            دروس حضورية
          </button>
        </div>

        <span className="text-xs text-stone-500">
          يتم تحديث المواعيد دورياً وفق الإعلانات الرسمية للمعهد
        </span>
      </div>

      {/* Schedule Items List */}
      <div className="space-y-4">
        {filteredSchedule.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-purple-300 shadow-sm transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-50 text-purple-800 font-bold text-xs">
                  <Radio className="w-5 h-5 animate-pulse" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
                      {item.day}
                    </span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {item.platform}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Status Badge */}
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 shrink-0">
                قادم هذا الأسبوع
              </span>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-100 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong className="text-stone-800">التوقيت:</strong> {item.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                <span><strong className="text-stone-800">المكان / المنصة:</strong> {item.location}</span>
              </div>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl text-xs text-stone-700 border border-stone-200/60">
              <span className="font-semibold text-stone-900">الموضوع والمتن المعتمد:</span> {item.topic}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-stone-500">
                المشرف: {item.sheikh}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 text-xs transition-colors cursor-pointer"
                  title="نسخ تفاصيل موعد الدرس"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-stone-500" />
                      <span>مشاركة الموعد</span>
                    </>
                  )}
                </button>

                <a
                  href={item.link || INSTITUTE_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>رابط البث والدروس</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Broadcast Guidance Box */}
      <div className="bg-gradient-to-r from-stone-900 to-purple-950 p-6 rounded-2xl text-stone-200 border border-purple-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>تنبيه لطلاب معهد السنة الكرام</span>
          </h4>
          <p className="text-xs text-stone-400">
            تُرفع التسجيلات الصوتية والمرئية فور انتهاء الدرس مباشرة إلى أقسام التطبيق والموقع الرسمي {INSTITUTE_INFO.officialWebsiteDisplay}.
          </p>
        </div>

        <a
          href={INSTITUTE_INFO.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shrink-0 transition-colors"
        >
          <span>دخول قاعة البث المباشر</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
