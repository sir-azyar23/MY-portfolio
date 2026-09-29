import { motion } from 'framer-motion';
import { Monitor, Smartphone, PenTool, Database, LayoutTemplate, Palette } from 'lucide-react';

const servicesData = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using React.js, Tailwind CSS, and modern backend technologies.",
    icon: Monitor,
    highlights: ["Custom Web Apps", "Responsive Design", "Fast Performance"]
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive native and cross-platform mobile applications for seamless user experiences with clean architecture.",
    icon: Smartphone,
    highlights: ["Android & Flutter", "Clean UX/UI", "Scalable Systems"]
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, modern, and user-centric interfaces with Figma, wireframing, and standard usability principles.",
    icon: PenTool,
    highlights: ["Figma Prototypes", "Wireframing", "User Centered"]
  },
  {
    title: "Poster & Card Design",
    description: "I design high-quality posters and different types of cards with a modern, creative, and professional visual style. My work focuses on clean layouts, strong typography, balanced colors, and attractive presentation for personal, business, promotional, and event needs.",
    icon: Palette,
    highlights: ["Poster Design", "Invitation & Event Cards", "Business Cards & Branding"]
  },
  {
    title: "Database Design",
    description: "Architecting structured, efficient, and optimized database schemas using PostgreSQL, MySQL, and relational modeling.",
    icon: Database,
    highlights: ["PostgreSQL & MySQL", "Relational Modeling", "Optimization"]
  },
  {
    title: "Frontend Development",
    description: "Translating UI designs into interactive, accessible, performant, and pixel-perfect web frontends.",
    icon: LayoutTemplate,
    highlights: ["Pixel-Perfect UI", "Modern React.js", "Animations & Motion"]
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] mb-3 shadow-sm">
          <span className="text-[var(--accent-gold)] text-xs">✦</span>
          <span className="text-[var(--badge-text)] font-semibold text-xs tracking-wider uppercase font-mono">
            WHAT I OFFER
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[var(--text-primary)] mb-4 tracking-tight">
          My <span className="text-[var(--accent-gold)]">Services</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--button-primary)] via-[var(--accent)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter text-sm sm:text-base">
          I provide end-to-end software development, UI/UX, and graphic design services to turn complex requirements into robust, visually stunning digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl group hover:border-[var(--border-glow)] hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-6 group-hover:bg-[var(--button-primary)] transition-colors shadow-sm">
                  <Icon size={30} className="text-[var(--accent-gold)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-[var(--text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-inter text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {service.highlights && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]">
                  {service.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono font-medium text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2.5 py-1 rounded-md"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
