import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  BookMarked, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  ShieldCheck,
  User
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'استفسار علمي شرعي',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(INSTITUTE_INFO.officialEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({
        name: '',
        email: '',
        category: 'استفسار علمي شرعي',
        subject: '',
        message: ''
      });
    }, 900);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-stone-900 to-teal-900 rounded-2xl p-6 sm:p-8 text-stone-100 border border-teal-800/40 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/70 text-teal-300 text-xs font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>قنوات التواصل الرسمية والمراسلة</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-amiri text-white">
            تواصل مع معهد السنة
          </h1>
          <p className="text-xs sm:text-sm text-stone-300">
            يسعدنا استقبال استفساراتكم العلمية ومقترحاتكم البناءة لمواصلة تطوير ونشر برامج ومحتويات المعهد.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Info & Official Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Official Email Highlight Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-stone-500 font-medium">البريد الرسمي المعتمد للمشروع</span>
                <h3 className="text-base font-bold text-stone-900 font-mono" dir="ltr">
                  {INSTITUTE_INFO.officialEmail}
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              يمكنكم مراسلتنا مباشرة عبر هذا البريد لاستقبال كافة الاستفسارات والملفات.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <button
                id="copy-official-email-btn"
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>تم نسخ البريد بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>نسخ البريد الرسمي</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${INSTITUTE_INFO.officialEmail}`}
                className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                title="فتح تطبيق البريد"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Official Web Portals */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              البوابات والمنصات الإلكترونية التابعة
            </h4>

            <div className="space-y-3">
              <a
                href={INSTITUTE_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200/70 hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-emerald-700" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block group-hover:text-emerald-800">
                      الموقع الرسمي لمعهد السنة
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {INSTITUTE_INFO.officialWebsiteDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-colors" />
              </a>

              <a
                href={INSTITUTE_INFO.booksWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <BookMarked className="w-5 h-5 text-amber-700" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block group-hover:text-amber-800">
                      موقع مؤلفات وكتب الشيخ
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {INSTITUTE_INFO.booksWebsiteDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-amber-700 transition-colors" />
              </a>
            </div>
          </div>

          {/* Project Management & Coordination */}
          <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-bold">
              <User className="w-4 h-4 text-teal-700" />
              <span>الإشراف والمتابعة والتنسيق</span>
            </div>
            <p className="leading-relaxed">
              إعداد وتنسيق ومتابعة هذا المشروع المستقل: <strong className="text-stone-950">{INSTITUTE_INFO.developerCredit}</strong>.
            </p>
            <p className="text-[11px] text-stone-500">
              «نسأل الله التوفيق والإخلاص وأن ينفع بهذا العمل الإسلام والمسلمين».
            </p>
          </div>

        </div>

        {/* Interactive Messaging Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-amiri">
                  نموذج المراسلة والاستفسار
                </h3>
                <p className="text-xs text-stone-500">
                  أرسل رسالتك وسيتواصل معك المشرفون عبر بريدك الإلكتروني
                </p>
              </div>
            </div>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 font-amiri">
                  تم إرسال رسالتكم بنجاح وجزاكم الله خيراً
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  تم استلام رسالتكم وتوجيهها إلى إدارة المعهد والمتابعة ({INSTITUTE_INFO.officialEmail}). سيتم الرد عليكم في أقرب فرصة بإذن الله تعالى.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>إرسال رسالة أخرى</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: عبد الله بن أحمد"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      البريد الإلكتروني للتواصل *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your-email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-teal-600 transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      تصنيف الرسالة
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-teal-600 transition-colors"
                    >
                      <option value="استفسار علمي شرعي">استفسار علمي شرعي</option>
                      <option value="اقتراح لتطوير المعهد">اقتراح لتطوير المعهد والتطبيق</option>
                      <option value="طلب كتب أو مؤلفات">طلب كتب أو مؤلفات الشيخ</option>
                      <option value="سؤال عن جدول الدروس والبث">سؤال عن جدول الدروس والبث</option>
                      <option value="أخرى">رسالة عامة</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-700 block">
                      موضوع الرسالة *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="عنوان مختصر للرسالة"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-teal-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Message text */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-700 block">
                    نص الرسالة أو الاستفسار *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب رسالتك أو استفسارك هنا بكل وضوح..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-teal-600 transition-colors resize-y"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>تُعامل جميع الرسائل بسرية وعناية تامة</span>
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-600 disabled:bg-stone-400 text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>إرسال الرسالة الآن</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
