import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SDFLogo } from './SDFLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll for backdrop blur adjustment
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Hide Navbar completely on the Contact page composition as specified
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#073B43]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#49CEC3]/20 py-3'
          : 'bg-[#073B43] shadow-md border-b border-[#49CEC3]/20 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Authentic SDF Logo Brand Link */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3] rounded-lg p-1"
            aria-label="Samrakshan Dhara Foundation Homepage"
          >
            <SDFLogo size={50} showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/about')
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              About
            </Link>

            <Link
              to="/initiatives"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/initiatives')
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              Our Initiatives
            </Link>

            <Link
              to="/gallery"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/gallery')
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/get-involved"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/get-involved')
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              Get Involved
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact')
                  ? 'text-[#49CEC3] font-semibold'
                  : 'text-[#F8F7EF]/90 hover:text-[#49CEC3]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Highlighted CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#087F78] to-[#28A77B] hover:from-[#28A77B] hover:to-[#49CEC3] text-[#F8F7EF] hover:text-[#073B43] text-sm font-semibold transition-all duration-300 shadow-md shadow-[#087F78]/30 group"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#073B43] border-b border-[#49CEC3]/20 shadow-2xl px-6 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/') && location.pathname === '/' ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/about') ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              About SDF
            </Link>

            <Link
              to="/initiatives"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/initiatives') ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              Our Initiatives
            </Link>

            <Link
              to="/gallery"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/gallery') ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              Vision Gallery
            </Link>

            <Link
              to="/get-involved"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/get-involved') ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              Get Involved
            </Link>

            <Link
              to="/contact"
              className={`text-base font-medium py-2 border-b border-white/10 ${
                isActive('/contact') ? 'text-[#49CEC3]' : 'text-white'
              }`}
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                to="/get-involved"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#087F78] to-[#28A77B] text-white font-medium shadow-lg"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
