import { useState, useEffect, useRef } from 'react';

// ===== Floating Hearts Background =====
function FloatingHearts() {
  const hearts = ['💕', '❤️', '💗', '💖', '💘', '💝', '✨', '🌹', '💞'];
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          emoji: hearts[Math.floor(Math.random() * hearts.length)],
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: 10 + Math.random() * 15,
          size: 14 + Math.random() * 18,
        });
      }
      setParticles(newParticles);
    };
    generateHearts();
  }, []);

  return (
    <div className="floating-hearts">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

// ===== Twinkling Stars =====
function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 60; i++) {
      generated.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
      });
    }
    setStars(generated);
  }, []);

  return (
    <div className="stars">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// ===== Navbar =====
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#us">Us</a></li>
        <li><a href="#story">Story</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#love">Love</a></li>
      </ul>
    </nav>
  );
}

// ===== Scroll Animation Hook =====
function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ===== Hero Section =====
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-overlay" />
      <div className="hero-content">
        <p className="hero-subtitle">Welcome to our world of</p>
        <h1 className="hero-title">K ❤️ R</h1>
        <div className="hero-heart">💕</div>
        <p className="hero-tagline">
          Every love story is beautiful, but ours is my favorite. 
          This page is dedicated to the most beautiful soul I know.
        </p>
        <a href="#us" className="hero-cta">Explore Our Story</a>
      </div>
    </section>
  );
}

// ===== Couple Photos Section =====
function CoupleSection() {
  return (
    <section className="section couple-section" id="us">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">The Two of Us</p>
          <h2 className="section-title">Made For Each Other</h2>
          <div className="section-divider" />
        </div>

        <div className="couple-grid">
          <div className="couple-card animate-on-scroll from-left">
            <img
              src="/photos/WhatsApp Image 2026-06-14 at 11.22.39 AM.jpeg"
              alt="My Beautiful Girl"
              loading="lazy"
            />
            <span className="couple-card-label">My Queen 👑</span>
          </div>

          <div className="couple-heart-divider">💕</div>

          <div className="couple-card animate-on-scroll from-right">
            <img
              src="/photos/WhatsApp Image 2026-06-14 at 11.22.46 AM.jpeg"
              alt="Her Handsome King"
              loading="lazy"
            />
            <span className="couple-card-label">Her King 🤴</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Love Story Timeline =====
function StorySection() {
  const milestones = [
    {
      title: '✨ The First Glance',
      text: 'The moment our eyes met, the whole world stopped. I knew right then that my life was about to change forever. Your smile lit up everything around you.',
    },
    {
      title: '💬 The First Conversation',
      text: 'We talked for hours like we had known each other for lifetimes. Every word, every laugh, every silence felt so comfortable and real.',
    },
    {
      title: '💕 Falling In Love',
      text: 'Day by day, my heart started beating for you. Your kindness, your warmth, your beautiful soul — I fell deeper and deeper in love with every moment.',
    },
    {
      title: '🌹 Together Forever',
      text: 'Now every sunrise is brighter, every sunset more beautiful, because I get to experience them all with you. You are my today and all of my tomorrows.',
    },
  ];

  return (
    <section className="section story-section" id="story">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">Our Journey</p>
          <h2 className="section-title">A Love Story</h2>
          <div className="section-divider" />
        </div>

        <div className="story-container">
          <div className="story-timeline">
            {milestones.map((item, index) => (
              <div key={index} className="story-item animate-on-scroll">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Gallery Section =====
function GallerySection({ onImageClick }) {
  const photos = [
    // Couple photos - best ones featured first
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.31 AM.jpeg', label: 'Kiss on the Cheek 💋' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.27 AM.jpeg', label: 'Mountain Love 🏔️' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.25 AM.jpeg', label: 'Garden Memories 🌺' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.53 AM.jpeg', label: 'Together Always 💑' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.21 AM.jpeg', label: 'Ride Together 🏍️' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.26 AM.jpeg', label: 'Flying Kites Together 🪁' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.23 AM.jpeg', label: 'Beach Adventures 🌊' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.22 AM (1).jpeg', label: 'Close to Heart 💕' },
    // Her beautiful solo photos
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.39 AM.jpeg', label: 'My Beautiful Queen 👑' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.20 AM.jpeg', label: 'Beach Vibes 🌊' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.22 AM.jpeg', label: 'Flower Princess 🌸' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.24 AM.jpeg', label: 'With Flowers 💐' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.25 AM.jpeg', label: 'Nature Walk 🌿' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.25 AM (1).jpeg', label: 'Nature Beauty 🍃' },
    // His solo photo
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.22.46 AM.jpeg', label: 'Her King 🤴' },
    // More couple & solo photos
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.23 AM (1).jpeg', label: 'Our Moments ✨' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.24 AM (1).jpeg', label: 'Beautiful Days 🌤️' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.26 AM (1).jpeg', label: 'Fun Times 🎉' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.27 AM.jpeg', label: 'Our Adventures 🗺️' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.27 AM (1).jpeg', label: 'Joyful Moments 😄' },
    { src: '/photos/WhatsApp Image 2026-06-14 at 11.23.28 AM.jpeg', label: 'Precious Time 💖' },
  ];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">Captured Moments</p>
          <h2 className="section-title">Our Gallery</h2>
          <div className="section-divider" />
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="gallery-item animate-on-scroll scale-in"
              onClick={() => onImageClick(photo.src)}
            >
              <img src={photo.src} alt={photo.label} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Love Letter Section =====
function LoveLetterSection() {
  return (
    <section className="section letter-section" id="love">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">From My Heart</p>
          <h2 className="section-title">A Love Letter</h2>
          <div className="section-divider" />
        </div>

        <div className="letter-container">
          <div className="letter-card animate-on-scroll scale-in">
            <p className="letter-text">
              You are the reason I believe in magic. Every moment with you feels like a dream 
              I never want to wake up from. Your smile is my sunrise, your laugh is my favorite 
              melody, and your love is the greatest gift I have ever received. I promise to love 
              you endlessly, to cherish every second, and to be your safe place in this world. 
              You are not just my love — you are my whole heart. 💕
            </p>
            <p className="letter-signature">Forever Yours, K ❤️</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Reasons I Love You =====
function ReasonsSection() {
  const reasons = [
    { icon: '😍', title: 'Your Beautiful Smile', text: 'The way you smile can brighten even the darkest of my days. It is the most beautiful thing I have ever seen.' },
    { icon: '💪', title: 'Your Strength', text: 'Your strength inspires me every day. You face every challenge with grace and courage.' },
    { icon: '🤗', title: 'Your Warm Heart', text: 'The way you care about others, your kindness and compassion make this world a better place.' },
    { icon: '😂', title: 'Your Laughter', text: 'Your laugh is my favorite sound in the entire universe. It fills my world with pure joy.' },
    { icon: '🌟', title: 'Your Dreams', text: 'I love how passionate you are about your dreams. Watching you chase them makes me so proud.' },
    { icon: '💕', title: 'Everything About You', text: 'Every little thing about you makes me fall in love all over again, every single day.' },
  ];

  return (
    <section className="section reasons-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <p className="section-label">A Thousand Reasons</p>
          <h2 className="section-title">Why I Love You</h2>
          <div className="section-divider" />
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card animate-on-scroll">
              <span className="reason-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Love Counter Section =====
function CounterSection() {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Our lovely day! 💕
    const startDate = new Date('2025-04-12T00:00:00');

    const updateCounter = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsed({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section counter-section">
      <div className="container">
        <div className="counter-container">
          <h2 className="counter-title animate-on-scroll">Falling In Love For...</h2>
          <div className="counter-grid">
            <div className="counter-item animate-on-scroll">
              <div className="counter-number">{elapsed.days}</div>
              <div className="counter-label">Days</div>
            </div>
            <div className="counter-item animate-on-scroll">
              <div className="counter-number">{elapsed.hours}</div>
              <div className="counter-label">Hours</div>
            </div>
            <div className="counter-item animate-on-scroll">
              <div className="counter-number">{elapsed.minutes}</div>
              <div className="counter-label">Minutes</div>
            </div>
            <div className="counter-item animate-on-scroll">
              <div className="counter-number">{elapsed.seconds}</div>
              <div className="counter-label">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== K+R Sand Heart Featured Section =====
function SandHeartSection() {
  return (
    <section className="section sandheart-section" id="sandheart">
      <div className="container">
        <div className="sandheart-wrapper animate-on-scroll scale-in">
          <div className="sandheart-image-container">
            <img
              src="/photos/WhatsApp Image 2026-06-14 at 11.23.19 AM.jpeg"
              alt="K + R written in sand inside a heart"
              className="sandheart-image"
            />
            <div className="sandheart-glow" />
          </div>
          <div className="sandheart-text-content animate-on-scroll">
            <p className="sandheart-label">Written in the Sand, Carved in Our Hearts</p>
            <h2 className="sandheart-title">K + R</h2>
            <p className="sandheart-quote">
              Some love stories are written in the stars...<br />
              Ours was written in the sand by the ocean,<br />
              where the waves whisper our names forever. 🌊
            </p>
            <div className="sandheart-date">
              <span className="sandheart-date-icon">📅</span>
              <span className="sandheart-date-text">Our story began — <strong>April 12, 2025</strong></span>
            </div>
            <div className="sandheart-badge">
              <span>💕</span> Forever & Always <span>💕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Promise Section =====
function PromiseSection() {
  return (
    <section className="section promise-section">
      <div className="container">
        <div className="promise-content animate-on-scroll">
          <span className="promise-emoji">💍</span>
          <p className="promise-text">
            I promise to love you <span className="highlight">forever</span>, to hold your hand 
            through every storm, and to be the reason behind your <span className="highlight">smile</span>.
          </p>
          <p className="promise-subtext">K & R, Always & Forever 💕</p>
        </div>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">K ❤️ R • Forever Yours</p>
      <p className="footer-text">
        Made with <span className="footer-heart">❤️</span> for the love of my life
      </p>
      <p className="footer-text" style={{ marginTop: '8px', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} • Every moment with you is a blessing 💕
      </p>
    </footer>
  );
}

// ===== Lightbox =====
function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img src={src} alt="Full view" />
    </div>
  );
}

// ===== MAIN APP EXPORT =====
export {
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
};
