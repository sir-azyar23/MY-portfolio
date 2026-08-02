import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="glass-card mt-auto border-t border-[var(--input-border)] py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-poppins font-bold text-2xl tracking-wide text-[var(--text-main)]">
            Zubeyr<span className="text-[#00B4D8]">_Amy</span>
          </span>
          <p className="text-[var(--text-muted)] font-inter text-sm mt-2">
            Building digital experiences with passion.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/sir-azyar23" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--input-bg)] hover:bg-[#00B4D8]/20 text-[var(--text-light)] hover:text-[#00B4D8] transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://instagram.com/zubeyr_Amy" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--input-bg)] hover:bg-[#00B4D8]/20 text-[var(--text-light)] hover:text-[#00B4D8] transition-all">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:zubeirame11@gmail.com" className="p-2 rounded-full bg-[var(--input-bg)] hover:bg-[#00B4D8]/20 text-[var(--text-light)] hover:text-[#00B4D8] transition-all">
            <Mail size={20} />
          </a>
          <a href="tel:+255772327918" className="p-2 rounded-full bg-[var(--input-bg)] hover:bg-[#00B4D8]/20 text-[var(--text-light)] hover:text-[#00B4D8] transition-all">
            <Phone size={20} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 border-t border-[var(--input-border)] pt-6 text-center">
        <p className="text-slate-500 font-inter text-sm">
          &copy; {new Date().getFullYear()} Zubeir Ame Zubeir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
