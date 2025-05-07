import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(254,95,32,1)] text-white py-[37px] px-20 max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between max-w-7xl mx-auto">
        <div className="w-full md:w-2/5">
          <h3 className="text-[22px] font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
            About
          </h3>
          <p className="text-[rgba(255,245,245,1)] text-[15px] mt-[17px]">
            At Arthlete, we believe in unlocking the full potential of every movement. 
            Our mission is to empower you with cutting-edge AI technology, personalized guidance, 
            and a supportive community to help you achieve your fitness goals and redefine your limits.
          </p>
        </div>

        <div className="w-full md:w-1/5">
          <h3 className="text-[22px] font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
            Quick Links
          </h3>
          <nav className="mt-[25px] flex flex-col gap-2">
            <Link to="/" className="text-xl hover:text-[rgba(254,85,43,1)]">
              Home
            </Link>
            <Link to="/contact" className="text-xl hover:text-[rgba(254,85,43,1)]">
              Contact Us
            </Link>
            <Link to="/privacy" className="text-lg hover:text-[rgba(254,85,43,1)]">
              Privacy policy
            </Link>
          </nav>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-[15px] font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
            Contact Info
          </h3>
          <div className="mt-[23px] flex flex-col gap-4 text-[15px]">
            <div className="border-b border-[rgba(255,255,255,0.15)] pb-4">
              Mail: info@example.com
            </div>
            <div className="border-b border-[rgba(255,255,255,0.15)] pb-4">
              Call: +91 9876543210
            </div>
            <div className="border-b border-[rgba(255,255,255,0.15)] pb-4">
              Location: New York, 235 Lane, 10001
            </div>
            <div className="border-b border-[rgba(255,255,255,0.15)] pb-4">
              Time: Workout Hours: 5AM - 8PM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
