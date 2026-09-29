import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-inter relative bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden selection:bg-[var(--accent)]/30 selection:text-[var(--text-primary)]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00C875] via-[#0A8F5B] to-[#E5B842] origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Persistent Unified Dark Emerald & Gold Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Green Glows */}
        <div className="absolute -top-24 left-1/4 w-[650px] h-[450px] bg-[var(--accent)]/10 dark:bg-[#00C875]/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[500px] bg-[var(--accent)]/8 dark:bg-[#087A4B]/14 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-[-5%] w-[550px] h-[450px] bg-[var(--accent-gold)]/6 dark:bg-[#E5B842]/8 rounded-full blur-[130px]" />

        {/* Subtle Decorative Background Rings */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-[var(--border)] opacity-30" />
        <div className="absolute top-1/3 -right-48 w-[650px] h-[650px] rounded-full border border-[var(--border)] opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full border border-[var(--border)] opacity-15" />

        {/* Small Decorative Floating Gold Dots */}
        <div className="absolute top-36 left-[8%] w-2 h-2 rounded-full bg-[var(--accent-gold)] opacity-70 shadow-[0_0_8px_var(--accent-gold)]" />
        <div className="absolute top-1/2 right-[6%] w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] opacity-60 shadow-[0_0_6px_var(--accent-gold)]" />
        <div className="absolute bottom-36 left-[14%] w-2 h-2 rounded-full bg-[var(--accent)] opacity-50" />
        <div className="absolute bottom-1/3 right-[18%] w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] opacity-75 shadow-[0_0_8px_var(--accent-gold)]" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28 pb-12 relative z-10">
        <Outlet />
      </main>
      
      <Footer />

      {/* Back to top button */}
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={goToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[var(--button-primary)] text-[var(--button-primary-text)] border border-[var(--accent-gold)]/60 shadow-lg hover:bg-[var(--button-primary-hover)] transition-all z-50 group hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={22} className="group-hover:-translate-y-0.5 transition-transform text-white" />
        </motion.button>
      )}
    </div>
  );
}
