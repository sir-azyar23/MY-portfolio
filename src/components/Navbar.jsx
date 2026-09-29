import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Moon, Sun, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMantineColorScheme } from '@mantine/core';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Skills', path: '/skills' },
  { title: 'Projects', path: '/projects' },
  { title: 'Services', path: '/services' },
  { title: 'Experience', path: '/experience' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#005B3D] flex items-center justify-center border border-[#D4A72C]/40 shadow-sm group-hover:bg-[#087A4B] transition-colors">
            <Code2 className="text-[#D4A72C]" size={22} />
          </div>
          <span className="font-poppins font-bold text-xl tracking-wide text-[var(--text-main)]">
            Zubeyr<span className="text-[#D4A72C]">_Amy</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`font-inter text-sm font-medium transition-all relative py-1 ${
                    isActive 
                      ? 'text-[#005B3D] dark:text-[#E7C766] font-semibold' 
                      : 'text-[var(--text-muted)] hover:text-[#005B3D] dark:hover:text-[#D4A72C]'
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A72C] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => toggleColorScheme()} 
              className="p-2.5 rounded-xl bg-[#DFF3E9]/60 dark:bg-white/10 text-[#005B3D] dark:text-[#E7C766] border border-[#DDE9E3] dark:border-white/15 hover:bg-[#DFF3E9] transition-colors"
              title="Toggle theme"
            >
              {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-xl bg-[#005B3D] text-white font-medium hover:bg-[#087A4B] transition-all flex items-center gap-2 text-sm border border-[#D4A72C]/40 shadow-sm"
            >
              <Mail size={16} className="text-[#D4A72C]" />
              Contact Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => toggleColorScheme()} 
            className="p-2 rounded-xl bg-[#DFF3E9]/60 dark:bg-white/10 text-[#005B3D] dark:text-[#E7C766] border border-[#DDE9E3] dark:border-white/15"
          >
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-[var(--text-main)] p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full glass border-t border-[var(--border-light)] py-4 flex flex-col items-center gap-3 md:hidden shadow-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-inter text-base font-medium w-full text-center py-2.5 transition-colors ${
                location.pathname === link.path 
                  ? 'text-[#005B3D] dark:text-[#E7C766] font-semibold bg-[#DFF3E9]/50 dark:bg-white/5 border-l-4 border-[#D4A72C]' 
                  : 'text-[var(--text-muted)] hover:text-[#005B3D]'
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-2.5 rounded-xl bg-[#005B3D] text-white font-medium flex items-center gap-2 text-sm border border-[#D4A72C]/40"
          >
            <Mail size={16} className="text-[#D4A72C]" />
            Contact Me
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
