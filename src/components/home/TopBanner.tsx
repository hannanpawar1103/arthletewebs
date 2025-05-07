
import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#FE5F20] py-2 px-4">
      <div className="container mx-auto flex items-center justify-center text-white">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-sm font-medium">Try Arthlete's Free AI-Powered Workout Demo – Built Just for You</p>
        </div>
      </div>
    </div>
  );
};
