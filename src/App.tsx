import { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { HeroFruitAnimation } from './components/HeroFruitAnimation';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OrangeBannerSection } from './components/OrangeBannerSection';
import { PartnersSection } from './components/PartnersSection';
import { ProjectSection } from './components/ProjectSection';

function App() {
  const stickyGroupRef = useRef<HTMLDivElement>(null);
  const [enterProgress, setEnterProgress] = useState(0);
  const [exitProgress, setExitProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = stickyGroupRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const wh = window.innerHeight;

      // totalProgress: 0 → 1 drives enter animation (stats fade in)
      //                1 → 2 drives exit animation (stats fade out)
      // Each phase spans one viewport of scroll.
      // Container is 300vh so sticky holds for 200vh — enter + exit — with no
      // extra dwell: page releases only after the last stat has exited.
      const totalProgress = (wh / 2 - rect.top) / wh;
      const clamped = Math.min(Math.max(totalProgress, 0), 2);
      setEnterProgress(Math.min(clamped, 1));
      setExitProgress(Math.min(Math.max(clamped - 1, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-md bg-primary px-4 py-2 text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="w-full">
        <HeroSection />
        <HeroFruitAnimation />
        {/* Sticky group: About + Banner + Project all pin together while banner animates */}
        <div ref={stickyGroupRef} className="relative h-[300vh]">
          <div className="sticky top-0">
            <AboutSection />
            <OrangeBannerSection enterProgress={enterProgress} exitProgress={exitProgress} />
            <ProjectSection />
          </div>
        </div>
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
