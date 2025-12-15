import { useEffect } from 'react';
import Head from 'next/head';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import MagazineSection from '../components/MagazineSection';
import MerchSection from '../components/MerchSection';
import ExclusiveSection from '../components/ExclusiveSection';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Head>
        <title>BLOCKED | Luxury Magazine & Agency</title>
        <meta name="description" content="BLOCKED - Luxury Fashion Magazine, Merch Brand, and Exclusive Agency. Coming 2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blocked-white min-h-screen">
        <TopBar />
        <Hero />
        <MagazineSection />
        <MerchSection />
        <ExclusiveSection />
        <Footer />
      </main>
    </>
  );
}