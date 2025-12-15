import { useState, useEffect } from 'react';
import EmailSignup from './EmailSignup';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToMagazine = () => {
    document.getElementById('magazine')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-8 bg-blocked-white">
      <h1 
        className={`text-blocked-red font-black text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        BLOCKED
      </h1>
      
      <p 
        className={`text-blocked-black text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        MAGAZINE • MERCH • EXCLUSIVE
      </p>
      
      <p 
        className={`text-blocked-red font-extrabold text-sm tracking-widest mb-10 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        COMING 2026
      </p>

      <div 
        className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <EmailSignup />
      </div>

      <button 
        onClick={scrollToMagazine}
        className="absolute bottom-10 text-blocked-red text-3xl animate-bounce-slow cursor-pointer hover:opacity-70 transition-opacity"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}