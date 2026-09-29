import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#003D2B] text-white mt-auto border-t border-[#D4A72C]/20 pt-[28px] pb-[18px] relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4A72C]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-poppins font-bold text-xl tracking-wide text-white">
            Zubeyr<span className="text-[#D4A72C]">_Amy</span>
          </span>
          <p className="text-emerald-100/70 font-inter text-xs sm:text-sm mt-1 max-w-sm leading-tight">
            Computer Science Graduate & Software Developer crafting modern digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a 
            href="https://github.com/sir-azyar23" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-xl bg-[#005B3D] border border-[#D4A72C]/30 text-[#D4A72C] hover:bg-[#087A4B] hover:text-white transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>
          <a 
            href="https://instagram.com/zubeyr_Amy" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-xl bg-[#005B3D] border border-[#D4A72C]/30 text-[#D4A72C] hover:bg-[#087A4B] hover:text-white transition-all shadow-sm"
            aria-label="Instagram Profile"
          >
            <FaInstagram size={17} />
          </a>
          <a 
            href="mailto:zubeirame11@gmail.com" 
            className="p-2.5 rounded-xl bg-[#005B3D] border border-[#D4A72C]/30 text-[#D4A72C] hover:bg-[#087A4B] hover:text-white transition-all shadow-sm"
            aria-label="Email Zubeir"
          >
            <Mail size={17} />
          </a>
          <a 
            href="tel:+255772327918" 
            className="p-2.5 rounded-xl bg-[#005B3D] border border-[#D4A72C]/30 text-[#D4A72C] hover:bg-[#087A4B] hover:text-white transition-all shadow-sm"
            aria-label="Call Zubeir"
          >
            <Phone size={17} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-[16px] pt-[14px] border-t border-emerald-900/60 text-center">
        <p className="text-emerald-200/60 font-inter text-xs">
          &copy; {new Date().getFullYear()} Zubeir Ame Zubeir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
