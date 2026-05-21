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
    <div className="min-h-screen flex flex-col font-inter relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00B4D8] origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00B4D8]/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0077B6]/20 rounded-full blur-[150px] mix-blend-screen" />
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
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#00B4D8] text-[var(--text-main)] shadow-lg hover:bg-[#0077B6] transition-colors z-50"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
}
