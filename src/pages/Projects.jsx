import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "Pharmacy Finder App",
    description: "A mobile and web application that helps users locate nearby pharmacies and access medicine delivery services. Features include real-time location tracking and inventory management.",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "Android"],
    github: "https://github.com/sir-azyar23",
    link: "#"
  },
  {
    title: "Zan Usafiri Management System",
    description: "A comprehensive transportation management system for managing transport operations and bookings in Zanzibar. Streamlines the booking process and route management.",
    tech: ["React.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/sir-azyar23",
    link: "#"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
              <Folder size={120} className="text-[#00B4D8]" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-[#00B4D8]" size={40} />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#00B4D8] transition-colors">
                    <FaGithub size={22} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#00B4D8] transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)] mb-4 group-hover:text-[#00B4D8] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--text-muted)] font-inter text-sm mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[#00B4D8]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
