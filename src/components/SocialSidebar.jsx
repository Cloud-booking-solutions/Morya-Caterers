
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-3 p-3 rounded-r-lg">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="Facebook"
        >
          <Facebook size={18} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="Twitter"
        >
          <Twitter size={18} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
