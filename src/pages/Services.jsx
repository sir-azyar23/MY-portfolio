import { motion } from 'framer-motion';
import { Monitor, Smartphone, PenTool, Database, LayoutTemplate } from 'lucide-react';

const servicesData = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using React.js, Tailwind CSS, and modern backend technologies.",
    icon: Monitor
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive native and cross-platform mobile applications for seamless user experiences with clean architecture.",
    icon: Smartphone
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, modern, and user-centric interfaces with Figma, wireframing, and standard usability principles.",
    icon: PenTool
  },
  {
    title: "Database Design",
    description: "Architecting structured, efficient, and optimized database schemas using PostgreSQL, MySQL, and relational modeling.",
    icon: Database
  },
  {
    title: "Frontend Development",
    description: "Translating UI designs into interactive, accessible, performant, and pixel-perfect web frontends.",
    icon: LayoutTemplate
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
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
            <span className="text-[#D4A72C]">✦</span> WHAT I OFFER
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#005B3D] dark:text-white mb-4">
          My <span className="text-[#D4A72C]">Services</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter text-sm sm:text-base">
          I provide end-to-end software development and UI/UX design services to turn complex requirements into robust digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl group hover:border-[#D4A72C]/60 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#D4A72C]/30 flex items-center justify-center mb-6 group-hover:bg-[#005B3D] transition-colors shadow-sm">
                <Icon size={30} className="text-[#005B3D] dark:text-[#E7C766] group-hover:text-[#D4A72C] transition-colors" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[#005B3D] dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--text-muted)] font-inter text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
