import { useState } from 'react';
import {
  FloatingHearts,
  Stars,
  Navbar,
  Hero,
  CoupleSection,
  SandHeartSection,
  StorySection,
  GallerySection,
  LoveLetterSection,
  ReasonsSection,
  CounterSection,
  PromiseSection,
  Footer,
  Lightbox,
  useScrollAnimation,
} from './components/LoveComponents';

function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  // Initialize scroll animation observer
  useScrollAnimation();

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      {/* Background Effects */}
      <Stars />
      <FloatingHearts />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <CoupleSection />
        <SandHeartSection />
        <StorySection />
        <GallerySection onImageClick={openLightbox} />
        <LoveLetterSection />
        <ReasonsSection />
        <CounterSection />
        <PromiseSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox */}
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
    </>
  );
}

export default App;
