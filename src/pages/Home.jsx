import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Mail, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Palette, 
  Layers, 
  Monitor, 
  GraduationCap, 
  Trophy 
} from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import profileImg from '../assets/profile.jpeg';

export default function Home() {
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

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 md:px-12 py-6 overflow-hidden">
      
      {/* Floating Vertical Social Bar on Left (Visible on desktop/tablet) */}
      <div className="hidden lg:flex flex-col gap-3 fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-3 p-2 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-[0_8px_30px_var(--glass-shadow)] backdrop-blur-xl">
          <a 
            href="https://github.com/sir-azyar23" 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--surface-2)] transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--surface-2)] transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a 
            href="https://instagram.com/zubeyr_Amy" 
            target="_blank" 
            rel="noreferrer" 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--surface-2)] transition-all"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a 
            href="mailto:zubeirame11@gmail.com" 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:bg-[var(--surface-2)] transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Content (Takes 7 cols on lg screens) */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-5 text-left"
        >
          {/* Top Badge: ✦ COMPUTER SCIENCE • SOFTWARE DEVELOPMENT */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] w-fit shadow-sm">
            <span className="text-[var(--accent-gold)] text-xs">✦</span>
            <span className="text-[var(--badge-text)] font-semibold text-xs tracking-wider uppercase font-mono">
              COMPUTER SCIENCE • SOFTWARE DEVELOPMENT
            </span>
          </div>

          {/* Main Heading: Hi, I'm Zubeyr */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-poppins font-extrabold leading-tight text-[var(--text-primary)] tracking-tight">
            Hi, I'm <span className="text-[var(--accent-gold)]">Zubeyr</span>
          </h1>

          {/* Subtitle: Software Developer & UI/UX Designer */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-[var(--text-primary)] -mt-2">
            Software Developer &amp; <span className="text-[var(--accent-gold)]">UI/UX Designer</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-[var(--text-secondary)] font-inter text-base sm:text-lg max-w-xl leading-relaxed">
            Computer Science graduate and passionate software developer focused on building modern web applications, software systems, intuitive UI/UX, and practical digital solutions.
          </p>

          {/* Skill Badges (Pill shape with icons) */}
          <div className="flex flex-wrap gap-2.5 mt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-sm">
              <Globe size={13} className="text-[var(--accent)]" /> Web Apps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-sm">
              <Smartphone size={13} className="text-[var(--accent)]" /> Android Apps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-sm">
              <Palette size={13} className="text-[var(--accent)]" /> UI/UX Design
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-mono font-medium text-[var(--badge-text)] shadow-sm">
              <Layers size={13} className="text-[var(--accent)]" /> Software Systems
            </span>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link 
              to="/contact" 
              className="px-7 py-3.5 rounded-2xl bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-[var(--button-primary-text)] font-semibold transition-all flex items-center gap-2.5 border border-[var(--accent-gold)]/60 shadow-[0_0_20px_rgba(0,200,117,0.35)] hover:shadow-[0_0_30px_rgba(0,200,117,0.55)] hover:-translate-y-0.5 group"
            >
              <Mail size={18} className="text-[var(--accent-gold)]" />
              <span>Contact Me</span>
              <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <button 
              onClick={handleWorkExperienceClick}
              className="px-7 py-3.5 rounded-2xl bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] text-[var(--button-secondary-text)] font-semibold border border-[var(--accent-gold)]/70 hover:border-[var(--accent-gold)] transition-all flex items-center gap-2.5 shadow-sm hover:-translate-y-0.5 group backdrop-blur-md"
            >
              <Briefcase size={18} className="text-[var(--accent-gold)]" />
              <span>Work Experience</span>
              <ArrowRight size={18} className="text-[var(--accent-gold)] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stat Cards (3 Cards below CTA buttons matching reference) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 pt-3 max-w-lg">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col justify-center gap-1 hover:border-[var(--border-glow)] transition-all">
              <div className="text-[var(--accent)] mb-0.5">
                <GraduationCap size={20} />
              </div>
              <span className="text-lg sm:text-xl font-poppins font-bold text-[var(--text-primary)]">3+</span>
              <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-inter leading-tight">Years Learning</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col justify-center gap-1 hover:border-[var(--border-glow)] transition-all">
              <div className="text-[var(--accent-gold)] font-mono font-bold text-sm mb-0.5">&lt;/&gt;</div>
              <span className="text-lg sm:text-xl font-poppins font-bold text-[var(--text-primary)]">3+</span>
              <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-inter leading-tight">Projects Built</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col justify-center gap-1 hover:border-[var(--border-glow)] transition-all">
              <div className="text-[var(--accent-gold)] mb-0.5">
                <Trophy size={20} />
              </div>
              <span className="text-base sm:text-lg font-poppins font-bold text-[var(--text-primary)] leading-snug">Continuous</span>
              <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-inter leading-tight">Growth</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Circular Glowing Hero Frame with Orbiting Info Badges (Takes 5 cols on lg screens) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center items-center py-10"
        >
          {/* Subtle Outer Background Glow */}
          <div className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Central Circular Photo Frame */}
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
            
            {/* Outer Gold Glowing Orbit Ring with Dot Accent */}
            <div className="absolute inset-[-14px] rounded-full border border-[var(--accent-gold)]/40 shadow-[0_0_25px_rgba(229,184,66,0.25)]" />
            <div className="absolute -top-3 right-10 w-2.5 h-2.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_10px_var(--accent-gold)] animate-pulse" />
            <div className="absolute bottom-6 -left-2 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />

            {/* Inner Emerald Frame */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-[0_0_40px_rgba(0,200,117,0.35)] relative bg-[#021811]">
              <img
                src={profileImg}
                alt="Zubeyr Profile"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* 4 Floating Glass Info Cards Orbiting Around Frame (Matching reference image) */}
          
          {/* Badge 1: Top Left - Clean Code / Best Practices */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-2 left-0 sm:-left-4 p-2.5 sm:p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border-glow)] shadow-[0_8px_25px_var(--glass-shadow)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--surface-solid)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
              <span className="font-mono font-bold text-xs">&lt;/&gt;</span>
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-poppins font-bold text-[var(--text-primary)]">Clean Code</div>
              <div className="text-[10px] text-[var(--text-muted)] font-inter">Best Practices</div>
            </div>
          </motion.div>

          {/* Badge 2: Top Right - Modern / Technologies */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -top-2 right-0 sm:-right-4 p-2.5 sm:p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border-glow)] shadow-[0_8px_25px_var(--glass-shadow)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--surface-solid)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-gold)]">
              <Monitor size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-poppins font-bold text-[var(--text-primary)]">Modern</div>
              <div className="text-[10px] text-[var(--text-muted)] font-inter">Technologies</div>
            </div>
          </motion.div>

          {/* Badge 3: Bottom Left - Software Systems / Scalable Solutions */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-4 left-0 sm:-left-4 p-2.5 sm:p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border-glow)] shadow-[0_8px_25px_var(--glass-shadow)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--surface-solid)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-gold)]">
              <Layers size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-poppins font-bold text-[var(--text-primary)]">Software Systems</div>
              <div className="text-[10px] text-[var(--text-muted)] font-inter">Scalable Solutions</div>
            </div>
          </motion.div>

          {/* Badge 4: Mid/Bottom Right - UI/UX Design / User Centered */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            className="absolute top-1/2 -right-2 sm:-right-8 -translate-y-1/2 p-2.5 sm:p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border-glow)] shadow-[0_8px_25px_var(--glass-shadow)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-[var(--surface-solid)] border border-[var(--border)] flex items-center justify-center text-[var(--accent-gold)]">
              <Palette size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-poppins font-bold text-[var(--text-primary)]">UI/UX Design</div>
              <div className="text-[10px] text-[var(--text-muted)] font-inter">User Centered</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
