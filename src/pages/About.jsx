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
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#D4A72C]/40 mb-3 shadow-sm">
          <span className="text-[#005B3D] dark:text-[#E7C766] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1.5">
            <span className="text-[#D4A72C]">✦</span> PASSIONATE SOFTWARE DEVELOPER
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#005B3D] dark:text-white mb-4">
          About <span className="text-[#D4A72C]">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] mx-auto rounded-full"></div>
      </motion.div>

      {/* Bio + Identity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16 items-start">

        {/* Bio Card — 3 columns */}
        <motion.div 
          variants={itemVariants} 
          className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#DFF3E9] dark:bg-[#005B3D]/20 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl font-poppins font-bold text-[#005B3D] dark:text-white mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#005B3D] text-[#D4A72C] flex items-center justify-center border border-[#D4A72C]/30 shadow-sm">
              <User size={20} />
            </div>
            Who I Am
          </h3>

          <p className="text-[var(--text-light)] font-inter leading-relaxed mb-5">
            Hello! I'm <span className="text-[#005B3D] dark:text-[#D4A72C] font-bold">ZUBEIR AME ZUBEIR</span> — known online as <span className="text-[#087A4B] dark:text-[#E7C766] font-semibold">Zubeyr_Amy</span>. I am a passionate Software Developer and a <span className="text-[var(--text-main)] font-semibold">Computer Science Graduate</span> from the <span className="text-[var(--text-main)] font-semibold">State University of Zanzibar (SUZA)</span>.
          </p>

          <p className="text-[var(--text-light)] font-inter leading-relaxed mb-5">
            I am a <span className="text-[#005B3D] dark:text-[#D4A72C] font-semibold">versatile software developer</span> with both strong technical engineering skills and a refined aesthetic sense for UI/UX. I don't just write code — I craft complete digital experiences, from system architecture to pixel-perfect interfaces.
          </p>

          <p className="text-[var(--text-light)] font-inter leading-relaxed mb-5">
            I have hands-on experience in <span className="text-[var(--text-main)] font-semibold">UI/UX design using Figma</span>, proficiency in the <span className="text-[var(--text-main)] font-semibold">Microsoft Office Suite</span>, and strong analytical foundations rooted in mathematics, enabling me to approach challenges with logic, efficiency, and creativity.
          </p>

          <p className="text-[var(--text-light)] font-inter leading-relaxed">
            I am passionate about <span className="text-[#005B3D] dark:text-[#D4A72C] font-semibold">continuously learning and exploring new technologies</span>. I enjoy expanding my knowledge across different areas of software development, staying up to date with emerging tools, and applying what I learn to build innovative and user-centered digital solutions.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {["Full-Stack Development", "React.js", "Spring Boot", "Flutter", "UI/UX Design", "Problem Solver", "Continuous Learner"].map((tag) => (
              <span key={tag} className="text-xs font-mono font-medium text-[#005B3D] dark:text-[#E7C766] bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] dark:border-[#005B3D]/50 px-3 py-1.5 rounded-full hover:border-[#D4A72C] transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats / Identity — 2 columns */}
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
          {[
            { label: "Status",       value: "Computer Science Graduate",                         color: "#005B3D" },
            { label: "University",   value: "State University of Zanzibar (SUZA)",               color: "#087A4B" },
            { label: "Field",        value: "Computer Science & Software Dev",                   color: "#0B8A55" },
            { label: "Focus Areas",  value: "Full-Stack · Mobile · UI/UX",                       color: "#005B3D" },
            { label: "Design Tool",  value: "Figma & Modern Web Design",                         color: "#087A4B" },
            { label: "Open To",      value: "Software Engineer Roles · Collaborations",           color: "#D4A72C" },
          ].map((item, i) => (
            <div key={i} className="glass-card px-6 py-4.5 rounded-2xl flex justify-between items-center group hover:border-[#D4A72C]/60 transition-all shadow-sm">
              <span className="text-[var(--text-muted)] text-xs sm:text-sm font-inter">{item.label}</span>
              <span className="text-xs sm:text-sm font-semibold font-space text-[#005B3D] dark:text-[#E7C766]">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Specializations Section */}
      <motion.div variants={itemVariants} className="text-center mb-10">
        <h3 className="text-3xl font-poppins font-bold text-[#005B3D] dark:text-white mb-2">
          What I <span className="text-[#D4A72C]">Specialize In</span>
        </h3>
        <p className="text-[var(--text-muted)] font-inter text-sm max-w-xl mx-auto">
          A broad engineering skill set spanning full-stack development, UI/UX design, and digital innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {specializations.map((spec, i) => {
          const Icon = spec.icon;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-6 rounded-2xl group hover:border-[#D4A72C]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-3.5 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] dark:border-[#005B3D]/50 flex items-center justify-center group-hover:bg-[#005B3D] transition-all">
                <Icon size={22} className="text-[#005B3D] dark:text-[#E7C766] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-base font-poppins font-bold text-[#005B3D] dark:text-white">{spec.label}</h4>
              <p className="text-[var(--text-muted)] text-xs font-inter leading-relaxed">{spec.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
