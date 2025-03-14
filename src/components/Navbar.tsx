
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "py-2 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-semibold text-lg"
        >
          <Shield className="h-6 w-6 text-piracy-600" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-piracy-700 to-piracy-500 font-bold">
            PiracyGuard
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/dashboard" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="text-sm font-medium bg-transparent hover:bg-gray-100 border border-gray-300"
          >
            Login
          </Button>
          <Button 
            className="text-sm font-medium bg-piracy-600 hover:bg-piracy-700 text-white"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-piracy-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-white border-b border-gray-200 px-4 py-4 md:hidden transition-all duration-300 transform ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/dashboard" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 hover:text-piracy-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="text-sm font-medium bg-transparent hover:bg-gray-100 border border-gray-300"
            >
              Login
            </Button>
            <Button 
              className="text-sm font-medium bg-piracy-600 hover:bg-piracy-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
