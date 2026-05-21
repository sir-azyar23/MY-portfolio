import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group text-[var(--text-main)]">
          <Code2 className="text-[#00B4D8] group-hover:text-[#0077B6] transition-colors" size={28} />
          <span className="font-poppins font-bold text-xl tracking-wide">Zubeyr<span className="text-[#00B4D8]">_Amy</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`font-inter text-sm font-medium transition-colors hover:text-[#00B4D8] ${location.pathname === link.path ? 'text-[#00B4D8] border-b-2 border-[#00B4D8]' : 'text-[var(--text-light)]'}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <button onClick={() => toggleColorScheme()} className="p-2 rounded-full glass-card hover:bg-[var(--input-hover)] transition-colors text-[var(--text-main)]">
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => toggleColorScheme()} className="p-2 rounded-full glass-card hover:bg-[var(--input-hover)] transition-colors text-[var(--text-main)]">
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-[var(--text-main)]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full glass-card border-t border-[var(--input-border)] py-4 flex flex-col items-center gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-inter text-base font-medium w-full text-center py-2 ${location.pathname === link.path ? 'text-[#00B4D8]' : 'text-[var(--text-light)]'}`}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
