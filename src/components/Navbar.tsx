import React, { useState } from 'react';
import { 
  BookOpen, 
  Headphones, 
  Video, 
  Calendar, 
  Mail, 
  Info, 
  Home, 
  ExternalLink, 
  Menu, 
  X,
  Compass,
  Sparkles
} from 'lucide-react';
import { TabType } from '../types';
import { INSTITUTE_INFO } from '../data/mockData';

interface NavbarProps {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'الرئيسية', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'عن المعهد', icon: <Info className="w-4 h-4" /> },
    { id: 'quran', label: 'القرآن الكريم', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'hadeeth', label: 'موسوعة الحديث', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { id: 'audio', label: 'الدروس الصوتية', icon: <Headphones className="w-4 h-4" /> },
    { id: 'video', label: 'الدروس المرئية', icon: <Video className="w-4 h-4" /> },
    { id: 'books', label: 'الكتب والمؤلفات', icon: <Compass className="w-4 h-4" /> },
    { id: 'schedule', label: 'جدول اللقاءات', icon: <Calendar className="w-4 h-4" /> },
    { id: 'contact', label: 'تواصل معنا', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleTabClick = (tab: TabType) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-stone-100 border-b border-emerald-900/40 shadow-lg">
      {/* Top Banner with official links & supervisor info */}
      <div className="bg-emerald-950/80 border-b border-emerald-900/30 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>بإشراف فضيلة الشيخ / هيثم بن محمد جميل سرحان حفظه الله</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a 
              href={INSTITUTE_INFO.officialWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>الموقع الرسمي: {INSTITUTE_INFO.officialWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <a 
              href={INSTITUTE_INFO.booksWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-400 transition-colors hidden sm:flex items-center gap-1 text-amber-200/90"
            >
              <span>موقع الكتب: {INSTITUTE_INFO.booksWebsiteDisplay}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 text-right group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 border border-emerald-500/30 flex items-center justify-center text-amber-300 shadow-md group-hover:border-amber-400/50 transition-all">
              <span className="font-amiri text-2xl font-bold">س</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-amiri text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {INSTITUTE_INFO.name}
                </span>
                <span className="text-[10px] bg-emerald-800/80 text-emerald-200 border border-emerald-600/40 px-1.5 py-0.5 rounded font-sans">
                  منصة مستقلة
                </span>
              </div>
              <p className="text-[11px] text-stone-400 font-sans">
                تعليم شرعي مؤصل على منهج أهل السنة والجماعة
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800/90 text-amber-300 shadow-inner border border-emerald-600/50'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/70'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-stone-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="sarhaan-direct-btn"
              href={INSTITUTE_INFO.booksWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 shadow transition-colors"
            >
              <span>موقع الكتب sarhaan.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-4 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-right transition-colors ${
                    isActive
                      ? 'bg-emerald-800 text-amber-300 font-bold border border-emerald-600'
                      : 'bg-stone-800/60 text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-stone-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-stone-800 flex flex-col gap-2 text-xs">
            <a 
              href={INSTITUTE_INFO.booksWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between p-2 rounded bg-amber-900/30 text-amber-200 border border-amber-800/40"
            >
              <span>موقع مؤلفات وكتب الشيخ (sarhaan.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href={INSTITUTE_INFO.officialWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between p-2 rounded bg-emerald-950/50 text-emerald-300 border border-emerald-800/40"
            >
              <span>الموقع الرسمي للمعهد (mahadsunnah.com)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
