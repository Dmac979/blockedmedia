
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

// Hero Section Component
const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been added to our list.`);
    setEmail('');
  };

  const scrollToMagazine = () => {
    document.getElementById('magazine')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <h1 className="hero-title">BLOCKEDMEDIA</h1>
      <p className="hero-tagline">MAGAZINE • MERCH • EXCLUSIVE</p>
      <p className="hero-coming">COMING 2026</p>
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="ENTER YOUR EMAIL" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit" className="signup-btn">NOTIFY ME</button>
      </form>

      <button className="scroll-arrow" onClick={scrollToMagazine} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

// Fade In Hook
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Fade In Wrapper Component
const FadeIn: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

// Magazine Card Component
const MagazineCard: React.FC<{ issue: string }> = ({ issue }) => (
  <FadeIn>
    <div className="magazine-card">
      <div className="placeholder-img">{issue}</div>
    </div>
  </FadeIn>
);

// Magazine Section
const MagazineSection: React.FC = () => {
  const issues = ['Issue 01', 'Issue 02', 'Issue 03', 'Issue 04', 'Issue 05', 'Issue 06'];
  
  return (
    <section id="magazine" className="section">
      <FadeIn><h2 className="section-title">MAGAZINE</h2></FadeIn>
      <FadeIn><p className="section-teaser">Limited issues. Exclusive features.</p></FadeIn>
      
      <div className="grid grid-4">
        {issues.map((issue) => (
          <MagazineCard key={issue} issue={issue} />
        ))}
      </div>
    </section>
  );
};

// Merch Card Component
const MerchCard: React.FC<{ type: string; name: string; price: string }> = ({ type, name, price }) => (
  <FadeIn>
    <div className="merch-card">
      <div className="placeholder-img">{type}</div>
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
    </div>
  </FadeIn>
);

// Merch Section
const MerchSection: React.FC = () => {
  const products = [
    { type: 'Hoodie', name: 'BLOCKED HOODIE', price: '$185' },
    { type: 'Tee', name: 'LOGO TEE', price: '$75' },
    { type: 'Hoodie', name: 'OVERSIZED HOODIE', price: '$195' },
    { type: 'Cap', name: 'BLOCKED CAP', price: '$55' },
  ];

  return (
    <section id="merch" className="section">
      <FadeIn><h2 className="section-title">MERCH</h2></FadeIn>
      <FadeIn><p className="section-teaser">Drops coming soon.</p></FadeIn>
      
      <div className="grid grid-4">
        {products.map((product) => (
          <MerchCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

// Model Card Component
const ModelCard: React.FC<{ name: string; bio: string }> = ({ name, bio }) => (
  <FadeIn>
    <div className="model-card">
      <div className="placeholder-img">Model</div>
      <h3 className="model-name">{name}</h3>
      <p className="model-bio">{bio}</p>
      <a href="https://www.fanvue.com" target="_blank" rel="noopener noreferrer" className="subscribe-btn">
        SUBSCRIBE
      </a>
    </div>
  </FadeIn>
);

// Exclusive Section
const ExclusiveSection: React.FC = () => {
  const models = [
    { name: 'Vixen Vale', bio: 'International runway model. Paris & Milan.' },
    { name: 'JADE WEST', bio: 'Editorial specialist. Vogue featured.' },
    { name: 'LUNA VERA', bio: 'Luxury brand ambassador. Global campaigns.' },
    { name: 'NOVA SAINT', bio: 'Avant-garde artist. Creative director.' },
    { name: 'REI TANAKA', bio: 'Tokyo fashion icon. Street style curator.' },
    { name: 'ZARA COLE', bio: 'High fashion. Cover model. Exclusive.' },
  ];

  return (
    <section id="exclusive" className="section">
      <FadeIn><h2 className="section-title">EXCLUSIVE</h2></FadeIn>
      <FadeIn><p className="section-teaser">Premium access. Curated talent.</p></FadeIn>
      
      <div className="grid grid-3">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => (
  <footer className="footer">
    <p className="footer-text">© 2025 BLOCKEDMEDIA</p>
  </footer>
);

// Main App Component
function App() {
  return (
    <div className="app">
      <Hero />
      <MagazineSection />
      <MerchSection />
      <ExclusiveSection />
      <Footer />
    </div>
  );
}

export default App;
