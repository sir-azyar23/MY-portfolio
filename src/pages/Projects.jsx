import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "MAG Estate Website",
    category: "Real Estate & Construction Platform",
    description: "A modern real estate and general trade platform designed for MAG Estate and General Trade Ltd. The system showcases properties, land, construction services, projects, building materials, tours, and company information. It also includes an admin CMS that allows website content to be managed dynamically.",
    tech: ["Django", "React (Vite)", "PostgreSQL", "Vercel", "Railway"],
    github: "https://github.com/sir-azyar23",
    liveDemo: "https://newmag-estate-website.vercel.app/"
  },
  {
    title: "ZRA Help Desk System",
    category: "Full Stack Web Application",
    description: "A modern IT Help Desk System developed for the Zanzibar Revenue Authority (ZRA). The system allows employees to submit IT support tickets, while administrators and IT support staff can assign, track, manage, and resolve issues through a secure role-based dashboard.",
    tech: ["React.js (Vite)", "Tailwind CSS", "JavaScript", "Spring Boot", "PostgreSQL", "JWT Authentication"],
    github: "https://github.com/sir-azyar23",
    liveDemo: "https://hdszra-project.vercel.app"
  },
  {
    title: "Zan Usafiri Management System",
    category: "Full Stack Web Application",
    description: "ZanUsafiri is a web-based route management system developed for the Zanzibar transport context. It centralizes the management of transport routes, ordered bus stops, passenger fares, buses, drivers and route assignments. The system also enables public users to explore available routes and fare information through an interactive map.",
    tech: ["React.js", "PostgreSQL", "Tailwind CSS", "Spring Boot", "REST APIs"],
    github: "https://github.com/sir-azyar23",
    liveDemo: "https://zan-usafir.vercel.app/"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6 md:px-12 py-12"
    >
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#D4A72C]/40 mb-3 shadow-sm">
          <span className="text-[#005B3D] dark:text-[#E7C766] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1.5">
            <span className="text-[#D4A72C]">✦</span> FEATURED WORK
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#005B3D] dark:text-white mb-4">
          Featured <span className="text-[#D4A72C]">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter text-sm sm:text-base">
          Here are some of the software projects I've engineered, demonstrating full-stack architecture, clean UI/UX, and real-world system implementations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="glass-card p-8 rounded-3xl group hover:-translate-y-1 hover:border-[#D4A72C]/60 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              <Folder size={120} className="text-[#005B3D]" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header Icon + Category Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF3E9] dark:bg-[#005B3D]/30 flex items-center justify-center border border-[#D4A72C]/40">
                  <Folder className="text-[#005B3D] dark:text-[#E7C766]" size={24} />
                </div>
                <span className="text-xs font-mono font-medium text-[#005B3D] dark:text-[#E7C766] bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] dark:border-[#005B3D]/50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-poppins font-bold text-[#005B3D] dark:text-white mb-3 group-hover:text-[#087A4B] dark:group-hover:text-[#D4A72C] transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-[var(--text-muted)] font-inter text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono font-medium text-[#005B3D] dark:text-[#E7C766] bg-[#DFF3E9] dark:bg-[#005B3D]/20 border border-[#DDE9E3] dark:border-[#005B3D]/40 px-3 py-1 rounded-full hover:border-[#D4A72C] transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-light)]">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2.5 rounded-xl bg-[#087A4B] hover:bg-[#005B3D] text-white font-medium transition-all flex items-center justify-center gap-2 text-sm border border-[#D4A72C]/30 shadow-md"
                >
                  <ExternalLink size={16} className="text-[#D4A72C]" /> Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#0A261D] border border-[#DDE9E3] dark:border-white/15 text-[#12251D] dark:text-white font-medium hover:border-[#D4A72C] hover:bg-[#DFF3E9]/50 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                >
                  <FaGithub size={16} className="text-[#005B3D] dark:text-[#E7C766]" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
