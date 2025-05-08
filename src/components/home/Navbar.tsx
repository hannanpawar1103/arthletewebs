
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className="bg-[#FE5F20] py-4 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-3xl text-white font-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/5160d6259faa576b3e58c43f263f1cec3d9f9560?placeholderIfAbsent=true"
            alt="Arthlete logo"
            className="w-10 h-10 object-contain"
          />
          <div>Arthlete</div>
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <button onClick={() => scrollToSection('home')} className="text-white font-medium text-sm md:text-base">Home</button>
          <button onClick={() => scrollToSection('features')} className="text-white font-medium text-sm md:text-base">Features</button>
          <button onClick={() => scrollToSection('reviews')} className="text-white font-medium text-sm md:text-base">Reviews</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white font-medium text-sm md:text-base">Pricing</button>
          <button onClick={() => scrollToSection('faq')} className="text-white font-medium text-sm md:text-base">FAQ</button>
          <a 
            href="https://forms.gle/RHsTMRrQkHoToqxXA" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-neutral-800 px-4 py-2 rounded-md font-medium text-sm md:text-base"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};
