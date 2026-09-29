import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // Lock page scrolling while loading screen is active
    document.body.style.overflow = 'hidden';

    const DURATION = 4200; // Progress increases to 100% over 4.2s
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(
        Math.round((elapsed / DURATION) * 100),
        100
      );

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);

        // Keep 100% & "WELCOME TO MY PORTFOLIO" state for ~400ms
        setTimeout(() => {
          setIsFadingOut(true);

          // Smooth 500ms fade-out transition, then unmount loader & restore scroll
          setTimeout(() => {
            document.body.style.overflow = 'unset';
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          }, 500);
        }, 400);
      }
    }, 50);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []); // EMPTY DEPENDENCY ARRAY - MUST NEVER RESET

  const getStatusText = (pct) => {
    if (pct <= 25) return "SYSTEM INIT";
    if (pct <= 50) return "LOADING COMPONENTS";
    if (pct <= 75) return "PREPARING INTERFACE";
    if (pct < 100) return "FINALIZING";
    return "READY";
  };

  return (
    <AnimatePresence>
      {!isFadingOut ? (
        <motion.div
          key="loading-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#002B1F] flex flex-col justify-between items-center px-6 py-8 select-none text-white overflow-hidden"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#087A4B]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#D4A72C]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Faint Background Floating Code Symbols */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <motion.span
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[15%] left-[10%] text-4xl font-mono text-[#D4A72C]"
            >
              &lt;/&gt;
            </motion.span>
            <motion.span
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute bottom-[20%] left-[15%] text-3xl font-mono text-[#087A4B]"
            >
              &#123; &#125;
            </motion.span>
            <motion.span
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[25%] right-[12%] text-2xl font-mono text-emerald-200"
            >
              0101
            </motion.span>
            <motion.span
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
              className="absolute bottom-[25%] right-[10%] text-3xl font-mono text-[#D4A72C]"
            >
              const
            </motion.span>
            <div className="absolute top-[50%] left-[5%] w-2 h-2 rounded-full bg-[#087A4B]" />
            <div className="absolute top-[70%] right-[6%] w-2 h-2 rounded-full bg-[#D4A72C]" />
          </div>

          {/* Top Spacer */}
          <div className="w-full" />

          {/* Main Center Content */}
          <div className="flex flex-col items-center text-center z-10 max-w-md w-full">
            
            {/* Developer Icon */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#005B3D] border-2 border-[#087A4B] flex items-center justify-center mb-6 relative shadow-lg"
              style={{
                boxShadow: "0 0 25px rgba(8, 122, 75, 0.35), 0 0 40px rgba(212, 167, 44, 0.12)"
              }}
            >
              <motion.span 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="font-mono font-bold text-3xl md:text-4xl text-[#D4A72C] tracking-tighter"
              >
                &lt;/&gt;
              </motion.span>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#D4A72C] animate-pulse" />
            </motion.div>

            {/* Developer Name */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-3xl md:text-4xl font-poppins font-bold tracking-wide mb-2 text-white"
            >
              Zubeyr<span className="text-[#D4A72C]">_Amy</span>
            </motion.h1>

            {/* Subtitle / Welcome Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-emerald-100/80 font-inter text-sm md:text-base mb-8 font-light min-h-[28px] flex items-center justify-center"
            >
              {progress >= 100 ? (
                <span className="text-[#E7C766] font-semibold tracking-wider animate-pulse">
                  WELCOME TO MY PORTFOLIO
                </span>
              ) : (
                "Building Digital Experiences..."
              )}
            </motion.p>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: "80%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="w-full flex flex-col items-center gap-3"
            >
              <div className="w-64 md:w-80 h-2 bg-[#004730] rounded-full overflow-hidden p-0.5 border border-[#087A4B]/40 shadow-inner">
                <div
                  className="h-full rounded-full transition-all duration-75 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #087A4B 0%, #D4A72C 100%)"
                  }}
                />
              </div>

              {/* Progress Status & Percentage Text */}
              <div className="flex justify-between w-64 md:w-80 text-xs font-mono text-[#D4A72C] font-semibold px-1">
                <span>{getStatusText(progress)}</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center z-10"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-emerald-200/80 bg-[#003D2B]/80 px-4 py-1.5 rounded-full border border-[#087A4B]/30">
              Computer Science • Software Development
            </span>
          </motion.div>

        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
