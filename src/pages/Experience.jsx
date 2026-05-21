import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-6 md:px-12 py-12"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-poppins font-bold text-[var(--text-main)] mb-4">
          Education & <span className="text-[#00B4D8]">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l-2 border-[#00B4D8]/30 pl-8 ml-4 md:ml-0">
        
        {/* Education Timeline Item */}
        <motion.div variants={itemVariants} className="mb-12 relative">
          <div className="absolute -left-[43px] top-0 w-10 h-10 rounded-full bg-[var(--bg-color)] border-2 border-[#00B4D8] flex items-center justify-center">
            <GraduationCap size={20} className="text-[#00B4D8]" />
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-3xl relative before:absolute before:top-4 before:-left-[15px] before:w-0 before:h-0 before:border-y-8 before:border-y-transparent before:border-r-8 before:border-r-[color:var(--glass-bg)] before:drop-shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)]">Bachelor Degree in Computer Science</h3>
              <span className="text-[#00B4D8] font-mono font-medium mt-2 md:mt-0 bg-[#00B4D8]/10 px-3 py-1 rounded-full text-sm w-fit">Expected Graduation: This Year</span>
            </div>
            
            <h4 className="text-xl text-[var(--text-light)] font-inter mb-4">State University of Zanzibar (SUZA)</h4>
            
            <p className="text-[var(--text-muted)] font-inter leading-relaxed">
              Currently a Third Year Student. Gained profound knowledge in software engineering, 
              database management, web and mobile app development, algorithms, and system design. 
              Actively participated in practical projects and coding challenges.
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline Item */}
        <motion.div variants={itemVariants} className="mb-12 relative">
          <div className="absolute -left-[43px] top-0 w-10 h-10 rounded-full bg-[var(--bg-color)] border-2 border-[#00B4D8] flex items-center justify-center">
            <Briefcase size={20} className="text-[#00B4D8]" />
          </div>
          
          <div className="glass-card p-6 md:p-8 rounded-3xl relative before:absolute before:top-4 before:-left-[15px] before:w-0 before:h-0 before:border-y-8 before:border-y-transparent before:border-r-8 before:border-r-[color:var(--glass-bg)] before:drop-shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)]">Software Developer</h3>
              <span className="text-[#00B4D8] font-mono font-medium mt-2 md:mt-0 bg-[#00B4D8]/10 px-3 py-1 rounded-full text-sm w-fit">Present</span>
            </div>
            
            <h4 className="text-xl text-[var(--text-light)] font-inter mb-4">Freelance / Academic Projects</h4>
            
            <p className="text-[var(--text-muted)] font-inter leading-relaxed">
              Developed full-stack web and mobile applications. Designed database structures using PostgreSQL. 
              Created RESTful APIs with Spring Boot and implemented responsive frontends using React.js and Tailwind CSS.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
