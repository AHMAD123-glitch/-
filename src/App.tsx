import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabType, VideoLesson } from './types';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { AudioPlayer, ActiveAudio } from './components/AudioPlayer';
import { VideoModal } from './components/VideoModal';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { QuranSection } from './components/QuranSection';
import { AudioLessonsSection } from './components/AudioLessonsSection';
import { VideoLessonsSection } from './components/VideoLessonsSection';
import { BooksSection } from './components/BooksSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AUDIO_LESSONS, VIDEO_LESSONS } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [currentAudio, setCurrentAudio] = useState<ActiveAudio | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoLesson | null>(null);

  const handlePlayAudio = (audio: ActiveAudio) => {
    setCurrentAudio(audio);
  };

  const handleOpenVideoById = (videoId: string) => {
    const video = VIDEO_LESSONS.find(v => v.id === videoId) || VIDEO_LESSONS[0];
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-700 selection:text-white relative">
      {/* Global Navigation Bar */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {currentTab === 'home' && (
              <HomeSection 
                onNavigate={setCurrentTab}
                onPlayAudio={handlePlayAudio}
                onOpenVideo={handleOpenVideoById}
                latestAudioLesson={AUDIO_LESSONS[0]}
              />
            )}

            {currentTab === 'about' && (
              <AboutSection />
            )}

            {currentTab === 'quran' && (
              <QuranSection 
                onPlayAudio={handlePlayAudio}
              />
            )}

            {currentTab === 'audio' && (
              <AudioLessonsSection 
                onPlayAudio={handlePlayAudio}
              />
            )}

            {currentTab === 'video' && (
              <VideoLessonsSection 
                onSelectVideo={setSelectedVideo}
              />
            )}

            {currentTab === 'books' && (
              <BooksSection />
            )}

            {currentTab === 'schedule' && (
              <ScheduleSection />
            )}

            {currentTab === 'contact' && (
              <ContactSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Audio Player if active */}
      <AudioPlayer 
        currentAudio={currentAudio} 
        onClose={() => setCurrentAudio(null)} 
      />

      {/* Video Modal Player if active */}
      <VideoModal 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />

      {/* Footer */}
      <Footer onNavigate={setCurrentTab} />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}
