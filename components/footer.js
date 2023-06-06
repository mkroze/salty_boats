import { useState } from 'react';
import SocialMedia from './indexComponents/Socials';
const Footer = () => {
  return (
    <footer className="flex-col h-10 justify-center items-center shadow-inner">
      <SocialMedia />
      <p className="text-center">Copyright © 2023 Shira3</p>
    </footer>
  );
};

export default Footer;
