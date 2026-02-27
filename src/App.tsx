import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { HeroFruitAnimation } from './components/HeroFruitAnimation';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { OrangeBannerSection } from './components/OrangeBannerSection';
import { PartnersSection } from './components/PartnersSection';
import { ProjectSection } from './components/ProjectSection';

function App() {
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
        <AboutSection />
        <OrangeBannerSection />
        <ProjectSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
