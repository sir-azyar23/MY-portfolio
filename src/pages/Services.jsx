import { motion } from 'framer-motion';
import { Monitor, Smartphone, PenTool, Database, LayoutTemplate } from 'lucide-react';

const servicesData = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using React.js and modern backend technologies.",
    icon: Monitor,
    delay: 0.1
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive native and cross-platform mobile applications for seamless user experiences.",
    icon: Smartphone,
    delay: 0.2
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, modern, and user-centric interfaces with tools like Canva and standard design principles.",
    icon: PenTool,
    delay: 0.3
  },
  {
    title: "Database Design",
    description: "Architecting structured, efficient, and optimized database schemas using PostgreSQL and MySQL.",
    icon: Database,
    delay: 0.4
  },
  {
    title: "Frontend Development",
    description: "Translating UI designs into interactive, accessible, and highly performant web frontends.",
    icon: LayoutTemplate,
    delay: 0.5
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
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
        <h2 className="text-4xl font-poppins font-bold text-[var(--text-main)] mb-4">
          My <span className="text-[#00B4D8]">Services</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter">
          I offer a wide range of software development services to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl group hover:bg-[#00B4D8]/5 transition-colors border border-[var(--input-border)] hover:border-[#00B4D8]/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00B4D8]/10 flex items-center justify-center mb-6 group-hover:bg-[#00B4D8] transition-colors">
                <Icon size={32} className="text-[#00B4D8] group-hover:text-[var(--text-main)] transition-colors" />
              </div>
              <h3 className="text-xl font-poppins font-bold text-[var(--text-main)] mb-4">
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
