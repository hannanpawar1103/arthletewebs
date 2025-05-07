
import React from 'react';
import { TopBanner } from '@/components/home/TopBanner';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Reviews } from '@/components/home/Reviews';
import { Pricing } from '@/components/home/Pricing';
import { Challenges } from '@/components/home/Challenges';
import { FAQ } from '@/components/home/FAQ';
import { Footer } from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6FBE9]">
      <TopBanner />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="challenges">
          <Challenges />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
