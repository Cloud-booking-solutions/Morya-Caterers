import { Instagram } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-3 p-3 rounded-r-lg">
        <a 
          href="tel:+919175202071" 
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300 shadow-lg relative group"
          aria-label="Call"
        >
          {/* Modern phone icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.25a.75.75 0 00-.75-.75h-3.375a.75.75 0 00-.75.75v1.125a12.375 12.375 0 01-12.375-12.375V4.5a.75.75 0 00-.75-.75H4.5A2.25 2.25 0 002.25 6.75z" />
          </svg>
          {/* Tooltip */}
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg z-50">
            Call Us
          </span>
        </a>
        <a 
          href="https://wa.me/919175202071" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="WhatsApp"
        >
          {/* WhatsApp icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.24-1.63A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.7.97.99-3.6-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/morya___caterers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
