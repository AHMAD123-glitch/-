export type TabType = 
  | 'home'
  | 'about'
  | 'quran'
  | 'audio'
  | 'video'
  | 'books'
  | 'schedule'
  | 'contact';

export interface AudioLesson {
  id: string;
  title: string;
  category: 'aqeedah' | 'fiqh' | 'hadith' | 'tafsir' | 'seerah' | 'mutoon';
  categoryLabel: string;
  sheikh: string;
  duration: string;
  audioUrl: string;
  date: string;
  description?: string;
  surahName?: string;
  series?: string;
  downloadsCount?: number;
}

export interface VideoLesson {
  id: string;
  title: string;
  series: string;
  sheikh: string;
  duration: string;
  videoUrl: string; // YouTube embed or direct video
  thumbnailUrl?: string;
  date: string;
  description: string;
  tags: string[];
}

export interface Book {
  id: string;
  title: string;
  category: string;
  author: string;
  pages: number;
  description: string;
  coverImage?: string;
  features: string[];
  directUrl: string; // e.g. sarhaan.com
  pdfUrl?: string;
}

export interface QuranSurah {
  number: number;
  name: string;
  englishName: string;
  arabicName: string;
  numberOfAyahs: number;
  revelationType: 'مكية' | 'مدنية';
  audioUrl: string;
  reciter: string;
  sampleAyahs?: {
    number: number;
    text: string;
    tafsir: string;
  }[];
}

export interface ScheduleItem {
  id: string;
  title: string;
  topic: string;
  sheikh: string;
  day: string;
  time: string; // Makkah time
  location: string;
  platform: 'بث مباشر' | 'حضوري' | 'زووم / يوتيوب';
  status: 'live' | 'upcoming' | 'completed';
  link?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}
