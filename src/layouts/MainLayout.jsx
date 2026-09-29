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
    <div className="min-h-screen flex flex-col font-inter relative bg-[var(--bg-color)] text-[var(--text-main)]">
      {/* Scroll Progress Bar with Green to Gold gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Soft Ambient Background Glows */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-[#DFF3E9]/60 dark:bg-[#005B3D]/15 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] bg-[#F5E7B9]/40 dark:bg-[#D4A72C]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-5%] left-[20%] w-[500px] h-[500px] bg-[#DFF3E9]/50 dark:bg-[#006B46]/15 rounded-full blur-[140px]" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
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
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#005B3D] text-white border border-[#D4A72C]/50 shadow-lg hover:bg-[#087A4B] hover:border-[#D4A72C] transition-all z-50 group"
          aria-label="Back to top"
        >
          <ArrowUp size={22} className="group-hover:-translate-y-0.5 transition-transform text-white" />
        </motion.button>
      )}
    </div>
  );
}
