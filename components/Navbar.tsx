import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer group" onClick={() => scrollTo('hero')}>
          <Logo isDark={!isScrolled && window.innerWidth >= 768} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Gallery', 'Process', 'Reviews'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`font-medium transition-colors hover:text-secondary ${isScrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
            >
              {item}
            </button>
          ))}
          <Button
            variant={isScrolled ? 'primary' : 'secondary'}
            onClick={() => scrollTo('contact')}
            className="!py-2 !px-4 !text-sm"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-primary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {['Services', 'Gallery', 'Process', 'Reviews'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
              >
                {item}
              </button>
            ))}
            <Button
              variant="primary"
              fullWidth
              onClick={() => scrollTo('contact')}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};