import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpeg';

const ROLES = [
  "Software Developer",
  "Creative Developer",
  "UI Designer",
  "Digital Solution Creator",
  "System & Application Designer"
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const updateText = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    };

    const timer = setTimeout(updateText, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex items-center justify-center px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card border-[#00B4D8]/30 w-fit">
            <span className="text-[#00B4D8] font-medium text-sm tracking-wider uppercase">✦ Creative Software Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight text-[var(--text-main)]">
            Hi, I'm <span className="text-[#00B4D8]">Zubeir</span>
            <br />
            <span className="text-3xl md:text-4xl text-[var(--text-light)] font-space">
              <span className="text-[var(--text-main)] min-w-[20px] inline-block">{text}</span>
              <span className="animate-pulse text-[#00B4D8]">|</span>
            </span>
          </h1>
          <p className="text-[var(--text-muted)] font-inter text-lg max-w-lg leading-relaxed">
            A versatile creative engineer who builds modern websites, develops software systems, designs sleek UI/UX, and crafts intelligent digital solutions — blending technical depth with aesthetic precision.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {["Web Apps", "Android Apps", "UI Design", "Software Systems"].map((tag) => (
              <span key={tag} className="text-xs font-mono text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/30 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/contact" className="px-8 py-3 rounded-full bg-[#00B4D8] text-[var(--text-main)] font-medium hover:bg-[#0077B6] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)]">
              <Mail size={20} />
              Contact Me
            </Link>
            <a href="/cv.pdf" target="_blank" className="px-8 py-3 rounded-full glass-card text-[var(--text-main)] font-medium hover:bg-[var(--input-hover)] transition-all flex items-center gap-2">
              <Download size={20} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-[#00B4D8]/20 relative shadow-[0_0_50px_rgba(0,180,216,0.2)]">
            <img
              src={profileImg}
              alt="Zubeir Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-tr from-[#0B0F19] via-[#0077B6] to-[#00B4D8] animate-pulse rounded-full flex items-center justify-center hidden">
              <span className="text-6xl text-[var(--text-main)] font-poppins font-bold mix-blend-overlay">ZAZ</span>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-4 right-0 md:right-4 glass-card px-4 py-3 rounded-2xl flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
            <span className="text-[#00B4D8] font-bold font-space text-sm">UI / UX Design</span>
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [1, -1, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-4 left-0 md:left-4 glass-card px-4 py-3 rounded-2xl flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#48CAE4] animate-pulse"></span>
            <span className="text-[var(--text-main)] font-bold font-space text-sm">Digital Solutions</span>
          </motion.div>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-1/2 -right-4 md:-right-8 glass-card px-3 py-2 rounded-xl flex items-center gap-2 hidden md:flex"
          >
            <span className="w-2 h-2 rounded-full bg-[#90E0EF]"></span>
            <span className="text-[var(--text-light)] font-space text-xs font-semibold">Software Systems</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
