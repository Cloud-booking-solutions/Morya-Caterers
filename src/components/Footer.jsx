
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400" aria-label="LinkedIn">
                <Linkedin size={20} />
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
                  <a href="tel:+919175202071" className="text-white hover:text-teal-400">+91 9175202071</a>
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
                  <address className="text-white not-italic">Gold Gym, Near, Kaspate Wasti Rd, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057</address>
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
            <Link to="/book-now" className="btn-primary mt-6 inline-block">
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
