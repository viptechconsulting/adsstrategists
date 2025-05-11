import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl md:text-2xl">
              Ads<span className="text-[#E7521F]">Strategists</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['Home', 'Services', 'Results', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#E7521F] transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="bg-[#E7521F] hover:bg-[#d04718] text-white py-2 px-5 rounded-md transition-colors duration-300 flex items-center">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-black/95 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            {['Home', 'Services', 'Results', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#E7521F] transition-colors duration-300 font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-[#E7521F] hover:bg-[#d04718] text-white py-3 px-5 rounded-md transition-colors duration-300 flex items-center justify-center mt-2">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;