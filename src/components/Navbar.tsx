
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    // For now, just navigate to a placeholder login page
    // In a real app, this would open a login modal or redirect to a login page
    navigate('/login');
  };

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled 
          ? "py-2 dark:bg-gray-900/80 bg-white/80 backdrop-blur-md border-b dark:border-gray-800 border-gray-200 shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-semibold text-lg"
        >
          <Shield className="h-6 w-6 text-piracy-600 dark:text-piracy-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-piracy-700 to-piracy-500 dark:from-piracy-400 dark:to-piracy-300 font-bold">
            PiracyGuard
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/dashboard" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="text-sm font-medium bg-transparent dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border dark:border-gray-700 border-gray-300"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button 
            className="text-sm font-medium bg-piracy-600 hover:bg-piracy-700 dark:bg-piracy-600 dark:hover:bg-piracy-500 text-white"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>
          <button 
            className="text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 border-gray-200 px-4 py-4 md:hidden transition-all duration-300 transform ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/features" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/dashboard" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-piracy-600 dark:hover:text-piracy-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t dark:border-gray-800 border-gray-200">
            <Button 
              variant="outline" 
              className="text-sm font-medium bg-transparent dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border dark:border-gray-700 border-gray-300"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button 
              className="text-sm font-medium bg-piracy-600 hover:bg-piracy-700 dark:bg-piracy-600 dark:hover:bg-piracy-500 text-white"
              onClick={handleGetStarted}
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
