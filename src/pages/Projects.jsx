import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
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
    description: "ZanUsafiri is a web-based route management system developed for the Zanzibar transport context. It centralizes the management of transport routes, ordered bus stops, passenger fares, buses, drivers and route assignments. The system also enables public users to explore available routes and fare information through an interactive map. It was developed using React, Spring Boot, PostgreSQL, Leaflet and OpenStreetMap.",
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
        <h2 className="text-4xl font-poppins font-bold text-[var(--text-main)] mb-4">
          Featured <span className="text-[#00B4D8]">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter">
          Here are some of the recent projects I've worked on, showcasing my skills in full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full border border-[var(--input-border)] hover:border-[#00B4D8]/50 shadow-lg"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              <Folder size={120} className="text-[#00B4D8]" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header Icon + Category Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00B4D8]/10 flex items-center justify-center border border-[#00B4D8]/30">
                  <Folder className="text-[#00B4D8]" size={24} />
                </div>
                <span className="text-xs font-mono text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/20 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)] mb-3 group-hover:text-[#00B4D8] transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-[var(--text-muted)] font-inter text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/20 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Live Demo & GitHub */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--input-border)]">
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2.5 rounded-xl bg-[#00B4D8] text-white font-medium hover:bg-[#0077B6] transition-all flex items-center justify-center gap-2 text-sm shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.5)]"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2.5 rounded-xl bg-[var(--input-bg)] border border-[var(--input-border)] hover:border-[#00B4D8] text-[var(--text-main)] font-medium hover:bg-[#00B4D8]/10 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
