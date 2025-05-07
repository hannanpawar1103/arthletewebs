import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="border-b-[color:var(--Green-90,#EEF8D3)] bg-[#FE5F20] flex w-full gap-5 whitespace-nowrap flex-wrap justify-between pl-[71px] pr-4 pt-4 border-b border-solid max-md:max-w-full max-md:pl-5">
      <Link to="/" className="flex items-stretch text-3xl text-white font-normal leading-[45px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/5160d6259faa576b3e58c43f263f1cec3d9f9560?placeholderIfAbsent=true"
          alt="Arthlete logo"
          className="aspect-[1.39] object-contain w-[50px] shrink-0"
        />
        <div>
          Arthlete
          <br />
        </div>
      </Link>
      <div className="flex items-center gap-[22px] text-sm text-[#FAFDF2] font-semibold">
        <Link to="/" className="text-white self-stretch my-auto">Home</Link>
        <Link to="/features" className="text-[#FAFDF2] self-stretch my-auto">Feature</Link>
        <Link to="/reviews" className="text-[#FAFDF2] self-stretch my-auto">Reviews</Link>
        <Link to="/pricing" className="text-[#FAFDF2] self-stretch my-auto">Pricing</Link>
        <Link to="/faq" className="text-[#FAFDF2] self-stretch my-auto">FAQ</Link>
        <button className="text-neutral-800 bg-white self-stretch px-4 py-3 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
};
