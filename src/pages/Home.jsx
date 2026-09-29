import { motion } from 'framer-motion';
import { Briefcase, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.jpeg';

const ROLES = [
  "Software Developer",
  "UI/UX Designer",
  "Web Developer",
  "Digital Solutions Developer"
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleWorkExperienceClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById('work-experience');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/experience');
      setTimeout(() => {
        const el = document.getElementById('work-experience');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[80vh] flex items-center justify-center px-6 md:px-12 py-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Top Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#D4A72C]/40 w-fit max-w-full shadow-sm">
            <span className="text-[#005B3D] dark:text-[#E7C766] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1.5">
              <span className="text-[#D4A72C]">✦</span> COMPUTER SCIENCE • SOFTWARE DEVELOPMENT
            </span>
          </div>

          {/* Heading & Profession Typing */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold leading-tight text-[var(--text-main)]">
            Hi, I'm <span className="text-[#005B3D] dark:text-[#D4A72C]">Zubeir</span>
            <br />
            <span className="text-3xl md:text-4xl font-space text-[#087A4B] dark:text-[#E7C766]">
              <span className="min-w-[20px] inline-block">{text}</span>
              <span className="animate-pulse text-[#D4A72C]">|</span>
            </span>
          </h1>

          {/* Introduction Description */}
          <p className="text-[var(--text-muted)] font-inter text-lg max-w-lg leading-relaxed">
            Computer Science graduate and software developer focused on building modern web applications, software systems, intuitive UI/UX, and practical digital solutions.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2.5 mt-1">
            {["Web Apps", "Android Apps", "UI Design", "Software Systems"].map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-mono font-medium text-[#005B3D] dark:text-[#E7C766] bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] dark:border-[#005B3D]/50 px-3.5 py-1.5 rounded-full hover:border-[#D4A72C] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-3">
            <Link 
              to="/contact" 
              className="px-8 py-3.5 rounded-2xl bg-[#005B3D] text-white font-medium hover:bg-[#087A4B] transition-all flex items-center gap-2.5 shadow-lg shadow-[#005B3D]/20 border border-[#D4A72C]/40 hover:-translate-y-0.5"
            >
              <Mail size={19} className="text-[#D4A72C]" />
              Contact Me
            </Link>
            <button 
              onClick={handleWorkExperienceClick}
              className="px-8 py-3.5 rounded-2xl bg-white dark:bg-[#0A261D] text-[#005B3D] dark:text-white font-medium border-2 border-[#D4A72C] hover:bg-[#F5E7B9]/40 dark:hover:bg-[#005B3D]/30 transition-all flex items-center gap-2.5 shadow-sm hover:-translate-y-0.5"
            >
              <Briefcase size={19} className="text-[#005B3D] dark:text-[#E7C766]" />
              Work Experience
            </button>
          </div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Badges */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center py-6"
        >
          {/* Subtle background glow */}
          <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] bg-gradient-to-tr from-[#005B3D]/20 to-[#D4A72C]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Image Container with Gold & Emerald Dual Border */}
          <div className="w-[290px] h-[290px] md:w-[430px] md:h-[430px] rounded-full overflow-hidden border-4 border-[#005B3D] ring-4 ring-[#D4A72C]/40 relative shadow-2xl bg-[#F3FAF6]">
            <img
              src={profileImg}
              alt="Zubeir Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-tr from-[#003D2B] via-[#005B3D] to-[#087A4B] animate-pulse rounded-full flex items-center justify-center hidden">
              <span className="text-6xl text-white font-poppins font-bold mix-blend-overlay">ZAZ</span>
            </div>
          </div>

          {/* Floating badge 1: UI / UX Design */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-2 right-0 md:right-2 glass-card px-4 py-3 rounded-2xl flex items-center gap-2.5 shadow-md border-l-4 border-l-[#D4A72C]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-pulse" />
            <span className="text-[#005B3D] dark:text-[#E7C766] font-bold font-space text-xs sm:text-sm">UI / UX Design</span>
          </motion.div>

          {/* Floating badge 2: Digital Solutions */}
          <motion.div
            animate={{ y: [8, -8, 8], rotate: [1, -1, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-2 left-0 md:left-2 glass-card px-4 py-3 rounded-2xl flex items-center gap-2.5 shadow-md border-l-4 border-l-[#005B3D]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#087A4B] animate-pulse" />
            <span className="text-[var(--text-main)] font-bold font-space text-xs sm:text-sm">Digital Solutions</span>
          </motion.div>

          {/* Floating badge 3: Software Systems */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-1/2 -right-4 md:-right-6 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 hidden md:flex shadow-md border-l-4 border-l-[#0B8A55]"
          >
            <span className="w-2 h-2 rounded-full bg-[#0B8A55]" />
            <span className="text-[var(--text-light)] font-space text-xs font-semibold">Software Systems</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
