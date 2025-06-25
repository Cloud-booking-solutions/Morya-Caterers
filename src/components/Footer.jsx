import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};

  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
           <Link to="/" className="flex items-center mb-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <span className="font-playfair text-2xl font-bold text-white">
    Morya <span className="text-teal-400">Caterers</span>
  </span>
</Link>

            <p className="text-gray-300 mb-6">
              Delicious food and excellent service for all your special occasions. We cater to weddings, corporate events, birthdays and more.
            </p>
            <div className="flex space-x-3">
              <a href="tel:+919175202071" className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300 shadow-lg relative group" aria-label="Call">
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
              <a href="https://www.instagram.com/morya___caterers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 rounded-full transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
            <li>
  <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>Home</Link>
</li>
<li>
  <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>About Us</Link>
</li>
<li>
  <Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>Services</Link>
</li>
<li>
  <Link to="/menu" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>Menu</Link>
</li>
<li>
  <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>Contact Us</Link>
</li>
<li>
  <Link to="/book-now" className="text-gray-300 hover:text-teal-400 transition-colors" onClick={scrollToTop}>Book Now</Link>
</li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-teal-400 mt-1" />
                <div>
                  <p className="text-gray-300">Call Us</p>
                  <a href="tel:+919175202071" className="text-white hover:text-teal-400">+91 9175202071</a><br/>
                  <a href="tel:+919665202072" className="text-white hover:text-teal-400">+91 9665202072</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-teal-400 mt-1" />
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <a href="mailto:moryacaterers2020@gmail.com" className="text-white hover:text-teal-400 break-all">moryacaterers2020@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={68} className="text-teal-400 mt-1" />
                <div>
                  <p className="text-gray-300">Our Location</p>
                  <a href="https://maps.google.com/?q=Gold+Gym,+Near,+Kaspate+Wasti+Rd,+Shankar+Kalat+Nagar,+Wakad,+Pimpri-Chinchwad,+Pune,+Maharashtra+411057" target="_blank" rel="noopener noreferrer" className="text-white not-italic underline hover:text-teal-400">
                    Gold Gym, Near, Kaspate Wasti Rd, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-teal-400" />
                <span className="text-gray-300">Monday - Sunday: 9am - 7pm</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <Clock size={18} className="text-teal-400" />
                <span className="text-gray-300">Saturday: 10am - 6pm</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-teal-400" />
                <span className="text-gray-300">Sunday: 10am - 4pm</span>
              </li> */}
            </ul>
            <Link to="/book-now" className="btn-primary mt-6 inline-block" onClick={scrollToTop}>
              Book Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Morya Caterers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
