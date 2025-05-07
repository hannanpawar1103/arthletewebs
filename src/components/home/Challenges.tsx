
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const Challenges: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white">
      <div className="container mx-auto">
        <div className="bg-[#FE5F20] rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="max-w-4xl w-full bg-white/95 rounded-xl p-8 m-8 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#234338] mb-6">
                  Weekly Fitness Challenges
                </h2>
                
                <p className="text-center mb-10 text-[#333] max-w-2xl mx-auto">
                  Each week, a custom set of exercises will be released for all users.
                  Compete to win exciting prizes by showing your best form and highest reps!
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#FFDED3] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">How to Win</h3>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Complete all assigned exercises using the Arthlete AI Motion Tracker</li>
                      <li>Aim for the highest accuracy and most reps</li>
                      <li>Only paid users are eligible for prizes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#FFDED3] p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">Weekly Winning Ratio</h3>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Week 1: 1 in 10 participants win</li>
                      <li>Week 2: 1 in 20 win</li>
                      <li>Week 3: 1 in 30 win</li>
                      <li>Week 4: 1 in 40 win</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-10">
                  <p className="mb-4 text-[#333]">Haven't downloaded yet? Install now!</p>
                  <a href="https://forms.gle/RHsTMRrQkHoToqxXA" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#234338] text-white hover:bg-[#1a332a]">
                      Download Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background pattern with colorful shapes */}
          <div className="h-[600px] md:h-[500px] w-full relative overflow-hidden">
            <img 
              src="/lovable-uploads/32915a56-1056-4b0f-a118-737cda5cd872.png" 
              alt="Weekly Fitness Challenges" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
