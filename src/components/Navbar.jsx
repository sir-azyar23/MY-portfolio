import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Mail } from 'lucide-react';
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
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-3 md:pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-2.5 bg-[var(--surface)] border border-[var(--border)] shadow-[0_8px_32px_var(--glass-shadow)] backdrop-blur-xl flex justify-between items-center pointer-events-auto transition-all duration-300">
        
        {/* Brand Logo with Glowing </> Icon */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[var(--surface-solid)] border border-[var(--border-glow)] flex items-center justify-center shadow-[0_0_15px_rgba(0,200,117,0.25)] group-hover:scale-105 transition-all">
            <span className="font-mono font-bold text-sm text-[var(--accent-gold)] tracking-tighter">&lt;/&gt;</span>
          </div>
          <span className="font-poppins font-bold text-lg tracking-wide text-[var(--text-primary)]">
            Zubeyr<span className="text-[var(--accent-gold)]">_Amy</span>
          </span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex gap-5 lg:gap-6 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`font-inter text-sm font-medium transition-all relative py-1 ${
                    isActive 
                      ? 'text-[var(--accent-gold)] font-semibold' 
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-gold)] rounded-full shadow-[0_0_6px_var(--accent-gold)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button 
              onClick={() => toggleColorScheme()} 
              className="w-9 h-9 rounded-full bg-[var(--surface-2)] text-[var(--accent-gold)] border border-[var(--border)] hover:border-[var(--accent-gold)]/60 flex items-center justify-center transition-all shadow-sm"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {colorScheme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Contact Me CTA Button */}
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-full bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-[var(--button-primary-text)] font-medium text-xs sm:text-sm flex items-center gap-2 border border-[var(--accent-gold)]/60 shadow-[0_0_15px_rgba(10,143,91,0.35)] hover:shadow-[0_0_20px_rgba(10,143,91,0.5)] transition-all hover:-translate-y-0.5"
            >
              <Mail size={15} className="text-[var(--accent-gold)]" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => toggleColorScheme()} 
            className="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--accent-gold)] border border-[var(--border)] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {colorScheme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button 
            className="p-1.5 rounded-lg text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="max-w-6xl mx-auto mt-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)] py-4 px-6 flex flex-col items-center gap-3 md:hidden shadow-2xl backdrop-blur-2xl pointer-events-auto"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-inter text-sm font-medium w-full text-center py-2 transition-colors rounded-lg ${
                location.pathname === link.path 
                  ? 'text-[var(--accent-gold)] font-semibold bg-[var(--surface-2)] border-l-4 border-[var(--accent-gold)]' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full py-2.5 rounded-xl bg-[var(--button-primary)] text-white font-medium flex items-center justify-center gap-2 text-sm border border-[var(--accent-gold)]/60"
          >
            <Mail size={15} className="text-[var(--accent-gold)]" />
            Contact Me
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
