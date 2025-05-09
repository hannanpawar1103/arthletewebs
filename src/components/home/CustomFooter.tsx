
import React from 'react';
import DiscordIcon from './DiscordIcon';
import { Footer } from './Footer';

const CustomFooter = () => {
  return (
    <div className="relative">
      <Footer />
      <div className="absolute bottom-8 right-8 md:right-12">
        <DiscordIcon />
      </div>
    </div>
  );
};

export default CustomFooter;
