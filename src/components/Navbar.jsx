
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if current path matches the link path
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
         <Link to="/" className="flex items-center" onClick={scrollToTop}>
  <span className="font-playfair text-2xl font-bold text-burgundy-800">
    Morya <span className="text-teal-500">Caterers</span>
  </span>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
             <Link 
  key={link.name} 
  to={link.path} 
  className={`nav-link ${isActive(link.path)}`}
  onClick={scrollToTop}
>
  {link.name}
</Link>

            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/book-now">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">Book Now</Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="lg:hidden text-gray-700 hover:text-teal-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden bg-white absolute left-0 right-0 shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 border-t' : 'max-h-0'}`}>
        <div className="container-custom py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
           <Link 
  key={link.name} 
  to={link.path} 
  className={`py-2 nav-link ${isActive(link.path)}`}
  onClick={() => {
    setIsMenuOpen(false);
    scrollToTop();
  }}
>
  {link.name}
</Link>

          ))}
          <Link 
            to="/book-now" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-teal-500 text-white hover:bg-teal-600 px-6 py-3 rounded-md font-medium transition-all duration-300 text-center mt-2"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
