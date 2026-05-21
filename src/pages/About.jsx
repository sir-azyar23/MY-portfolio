import { motion } from 'framer-motion';
import { User, Globe, Smartphone, PenTool, Layers, Sparkles } from 'lucide-react';

const specializations = [
  { icon: Globe,      label: "Modern Websites",            desc: "Building fast, responsive and visually stunning web experiences." },
  { icon: Layers,     label: "Software Systems",           desc: "Developing scalable backend systems and full-stack applications." },
  { icon: Smartphone, label: "Android Applications",       desc: "Creating native Android apps with clean UX and solid architecture." },
  { icon: PenTool,    label: "UI/UX Design",               desc: "Designing modern, intuitive interfaces for apps and digital systems." },
  { icon: Sparkles,   label: "Digital Solutions",          desc: "Crafting end-to-end digital products with clean, modern UI/UX." },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-6 md:px-12 py-12"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 mb-4">
          <span className="text-[#00B4D8] font-medium text-sm tracking-wider uppercase">✦ Creative Software Engineering</span>
        </div>
        <h2 className="text-4xl font-poppins font-bold text-[var(--text-main)] mb-4">
          About <span className="text-[#00B4D8]">Me</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
      </motion.div>

      {/* Bio + Identity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16 items-start">

        {/* Bio Card — takes 3 cols */}
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-3 glass-card p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#00B4D8]/10 rounded-full blur-[60px] pointer-events-none"></div>

          <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)] mb-6 flex items-center gap-3">
            <User className="text-[#00B4D8]" size={26} />
            Who I Am
          </h3>

          <p className="text-[var(--text-light)] font-inter leading-relaxed mb-5">
            Hello! I'm{' '}
            <span className="text-[#00B4D8] font-bold">ZUBEIR AME ZUBEIR</span> — known online as{' '}
            <span className="text-[#48CAE4] font-semibold">Zubeyr_Amy</span>. I am a passionate Software Developer and currently a Third Year Computer Science Student at the{' '}
            <span className="text-[var(--text-main)] font-semibold">State University of Zanzibar (SUZA)</span>, expected to graduate this year.
          </p>

          <p className="text-[var(--text-light)] font-inter leading-relaxed mb-5">
            I am a <span className="text-[#00B4D8] font-semibold">versatile creative developer</span> with both strong technical engineering skills and a refined aesthetic sense for UI/UX. I don't just write code — I craft complete digital experiences, from system architecture to pixel-perfect interfaces.
          </p>

          <p className="text-[var(--text-light)] font-inter leading-relaxed">
            Beyond development, I have hands-on experience in UI/UX design using <span className="text-[var(--text-main)] font-semibold">Figma</span>, productivity mastery through the <span className="text-[var(--text-main)] font-semibold">Microsoft Office Suite</span>, and strong analytical foundations rooted in mathematics — all of which make me a well-rounded problem solver.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-7">
            {["Full-Stack", "Android Dev", "UI/UX Design", "Creative Dev", "Problem Solver"].map((tag) => (
              <span key={tag} className="text-xs font-mono text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/25 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats / Identity — takes 2 cols */}
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-5">
          {[
            { label: "Current Status",  value: "3rd Year CS Student",        color: "#00B4D8" },
            { label: "University",      value: "SUZA — Zanzibar",             color: "#48CAE4" },
            { label: "Graduation",      value: "Expected This Year",          color: "#90E0EF" },
            { label: "Focus Areas",     value: "Web · Mobile · UI Design",   color: "#00B4D8" },
            { label: "Design Tool",     value: "Figma",                       color: "#48CAE4" },
            { label: "Open To",         value: "Freelance & Collaborations",  color: "#90E0EF" },
          ].map((item, i) => (
            <div key={i} className="glass-card px-6 py-4 rounded-2xl flex justify-between items-center group hover:border-[#00B4D8]/50 transition-colors">
              <span className="text-[var(--text-muted)] text-sm font-inter">{item.label}</span>
              <span className="text-sm font-semibold font-space" style={{ color: item.color }}>{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Specializations */}
      <motion.div variants={itemVariants} className="text-center mb-10">
        <h3 className="text-2xl font-poppins font-bold text-[var(--text-main)] mb-2">
          What I <span className="text-[#00B4D8]">Specialize In</span>
        </h3>
        <p className="text-[var(--text-muted)] font-inter text-sm max-w-xl mx-auto">
          A broad and creative skill set that spans design, development, and digital innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {specializations.map((spec, i) => {
          const Icon = spec.icon;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl group hover:border-[#00B4D8]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center group-hover:bg-[#00B4D8] transition-colors">
                <Icon size={22} className="text-[#00B4D8] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-base font-poppins font-bold text-[var(--text-main)]">{spec.label}</h4>
              <p className="text-[var(--text-muted)] text-xs font-inter leading-relaxed">{spec.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
