import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Home, Headset, Bus } from 'lucide-react';
import { 
  SiDjango, 
  SiReact, 
  SiPostgresql, 
  SiVercel, 
  SiRailway, 
  SiTailwindcss, 
  SiJavascript, 
  SiSpring, 
  SiJsonwebtokens 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const projectsData = [
  {
    title: "MAG Estate Website",
    description: "A modern real estate and general trade platform designed for MAG Estate and General Trade Ltd. Showcases properties, land, construction services, projects, building materials, tours, and company information with an admin CMS.",
    icon: Home,
    tech: [
      { name: "Django", icon: SiDjango },
      { name: "React (Vite)", icon: SiReact },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway }
    ],
    liveDemo: "https://newmag-estate-website.vercel.app/"
  },
  {
    title: "ZRA Help Desk System",
    description: "A modern IT Help Desk System developed for the Zanzibar Revenue Authority (ZRA). The system allows employees to submit IT support tickets, while administrators and IT support staff can assign, track, manage, and resolve issues through a secure and intuitive dashboard.",
    icon: Headset,
    tech: [
      { name: "React.js (Vite)", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Spring Boot", icon: SiSpring },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "JWT Auth", icon: SiJsonwebtokens }
    ],
    liveDemo: "https://hdszra-project.vercel.app"
  },
  {
    title: "Zan Usafiri Management System",
    description: "A web-based route management system developed for the Zanzibar transport context. It centralizes the management of transport routes, bus stops, passenger fares, buses, drivers and route assignments with interactive maps and reports.",
    icon: Bus,
    tech: [
      { name: "React.js", icon: SiReact },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Spring Boot", icon: SiSpring },
      { name: "REST APIs", icon: TbApi }
    ],
    liveDemo: "https://zan-usafir.vercel.app/"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.18 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full py-12 md:py-16 overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          {/* Top Badge: ✦ MY WORKS */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] mb-3 shadow-[0_0_15px_rgba(13,167,104,0.15)]">
            <span className="text-[var(--accent-gold)] text-xs">✦</span>
            <span className="text-[var(--badge-text)] font-semibold text-xs tracking-widest uppercase font-mono">
              MY WORKS
            </span>
          </div>

          {/* Main Centered Heading: Featured Projects */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[var(--text-primary)] mb-3 tracking-tight">
            Featured <span className="text-[var(--accent-gold)]">Projects</span>
          </h2>

          {/* Green + Gold Decorative Underline */}
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[var(--button-primary)] via-[var(--accent)] to-[var(--accent-gold)] mb-5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />

          {/* Subtitle */}
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto font-inter text-sm sm:text-base leading-relaxed">
            Here are some of the software projects I've engineered, demonstrating full-stack architecture, clean UI/UX, and real-world system implementations.
          </p>
        </div>

        {/* 3 EQUAL-HEIGHT PROJECT CARDS IN ONE ROW (Desktop: 3, Tablet: 2, Mobile: 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;

            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="relative rounded-[22px] p-7 md:p-8 flex flex-col justify-between h-full glass-card group hover:border-[var(--border-glow)] hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-300"
              >
                {/* Subtle corner light accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--accent-gold)]/10 to-transparent rounded-tr-[22px] pointer-events-none" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] opacity-40 shadow-[0_0_6px_var(--accent-gold)]" />

                {/* Top Section: Icon, Title, Description, Tech Badges */}
                <div className="flex flex-col flex-grow">
                  {/* Large Centered Project Icon with Nested Rings */}
                  <div className="relative flex items-center justify-center mx-auto mb-7 mt-2">
                    {/* Outer Circular Decorative Line */}
                    <div className="w-28 h-28 rounded-full border border-[var(--border)] absolute animate-[spin_24s_linear_infinite]" />
                    {/* Gold dot on the decorative ring */}
                    <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[var(--accent-gold)] shadow-[0_0_8px_var(--accent-gold)]" />
                    <div className="absolute bottom-2 left-1 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />

                    {/* Icon Container */}
                    <div className="w-20 h-20 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] shadow-[0_0_25px_rgba(13,167,104,0.35),inset_0_0_15px_rgba(229,184,66,0.08)] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent size={34} className="text-[var(--accent-gold)] drop-shadow-[0_2px_8px_rgba(229,184,66,0.35)]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-poppins font-bold text-[var(--text-primary)] mb-3 text-left tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] font-inter leading-relaxed mb-6 text-left flex-grow">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((item, i) => {
                      const TechIcon = item.icon;
                      return (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-inter font-medium text-[var(--badge-text)] shadow-sm hover:border-[var(--accent-gold)] hover:bg-[var(--surface-2)] transition-colors cursor-default"
                        >
                          {TechIcon && <TechIcon size={13} className="text-[var(--accent)]" />}
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Section: Single Full-Width "Live Demo" Button */}
                <div className="pt-2">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-[var(--button-primary-text)] font-poppins font-semibold text-sm sm:text-base border border-[var(--accent-gold)]/70 hover:border-[var(--accent-gold)] shadow-[0_0_20px_rgba(5,150,105,0.45)] hover:shadow-[0_0_30px_rgba(5,150,105,0.7)] flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 group/btn"
                  >
                    <ExternalLink size={17} className="text-[var(--accent-gold)]" />
                    <span>Live Demo</span>
                    <ArrowRight size={17} className="text-white group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
