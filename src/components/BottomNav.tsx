import React from 'react';
import { Home, BookOpen, Headphones, Video, Calendar, BookMarked, Mail, Sparkles } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setCurrentTab }) => {
  const items: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'الرئيسية', icon: <Home className="w-5 h-5" /> },
    { id: 'quran', label: 'القرآن', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'hadeeth', label: 'الحديث (قريباً)', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'audio', label: 'الصوتيات', icon: <Headphones className="w-5 h-5" /> },
    { id: 'video', label: 'المرئيات', icon: <Video className="w-5 h-5" /> },
    { id: 'books', label: 'قريباً بإذن الله', icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
    { id: 'schedule', label: 'الجدول', icon: <Calendar className="w-5 h-5" /> },
    { id: 'contact', label: 'تواصل', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] pb-safe">
      <div className="flex items-center justify-around px-1 py-1.5">
        {items.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              id={`bottom-nav-${item.id}`}
              onClick={() => {
                setCurrentTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg transition-colors min-w-[48px] ${
                isActive ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <span className={`transition-transform duration-200 ${isActive ? 'scale-110 text-amber-400' : ''}`}>
                {item.icon}
              </span>
              <span className="text-[10px] mt-0.5 tracking-tight leading-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
