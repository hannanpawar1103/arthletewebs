
import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F6FBE9] py-16 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <span className="text-xs uppercase font-medium text-[#468671] tracking-wider">Transform Your Fitness Journey with</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3129] leading-tight">
            AI-Powered Motion Tracking
          </h1>
          <p className="text-[#333] text-base md:text-lg">
            Welcome to Arthlete, your intelligent training companion that helps you move better, grow stronger, and stay consistent. Whether you're at home, school, or on the go, our motion-tracking AI guides you with real-time feedback.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/start" 
              className="bg-[#FE5F20] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e55419] transition-colors">
              Start Training
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex -space-x-3">
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/4a5fdb5af0ef3d953de7feb78bd9b1c985b97e49?placeholderIfAbsent=true" 
                alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/e16d12c2581447d1d87a5175e71e1bcced911528?placeholderIfAbsent=true" 
                alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/43e95603b1202c82ec634ab40bcce39ac08cbeb8?placeholderIfAbsent=true" 
                alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="font-bold text-[#468671]">430+</span>{" "}
              <span className="text-[#234338]">Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
