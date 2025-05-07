
import React from 'react';
import { TopBanner } from '@/components/home/TopBanner';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Reviews } from '@/components/home/Reviews';
import { Pricing } from '@/components/home/Pricing';
import { FAQ } from '@/components/home/FAQ';
import { Footer } from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
