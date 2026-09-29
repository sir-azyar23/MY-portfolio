import { motion } from 'framer-motion';
import { Layout, FileSpreadsheet, Calculator } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Mantine UI"],
    color: "#005B3D"
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Django", "REST APIs"],
    color: "#087A4B"
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL"],
    color: "#0B8A55"
  },
  {
    category: "Tools & Others",
    skills: ["GitHub", "Git", "Android Studio", "VS Code", "Canva", "Vercel"],
    color: "#006B46"
  }
];

const additionalSkillsData = [
  {
    category: "UI/UX Design",
    icon: Layout,
    skills: [
      { name: "Figma", level: 90 },
      { name: "User Interface Design", level: 85 },
      { name: "Wireframing", level: 80 },
      { name: "Modern Frontend Design", level: 85 },
      { name: "Application UI Prototyping", level: 80 },
      { name: "System Interface Design", level: 75 }
    ]
  },
  {
    category: "Microsoft Office",
    icon: FileSpreadsheet,
    skills: [
      { name: "Microsoft Word", level: 95 },
      { name: "Microsoft Excel", level: 85 },
      { name: "Microsoft PowerPoint", level: 90 },
      { name: "Microsoft Access", level: 75 },
      { name: "Microsoft Office Suite", level: 90 }
    ]
  },
  {
    category: "Mathematics & Analytical Skills",
    icon: Calculator,
    skills: [
      { name: "Statistics", level: 85 },
      { name: "Linear Algebra", level: 80 },
      { name: "Basic Mathematics", level: 95 },
      { name: "Calculus", level: 75 },
      { name: "Mathematical Problem Solving", level: 90 },
      { name: "Teaching Mathematics", level: 85 }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
            <span className="text-[#D4A72C]">✦</span> TECHNICAL PROFICIENCY
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#005B3D] dark:text-white mb-4">
          My <span className="text-[#D4A72C]">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter text-sm sm:text-base">
          A comprehensive overview of my technical expertise, design tools, and software engineering capabilities.
        </p>
      </div>

      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="glass-card p-8 rounded-3xl hover:border-[#D4A72C]/60 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-poppins font-bold text-[#005B3D] dark:text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#D4A72C]" />
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium font-inter text-[#005B3D] dark:text-[#E7C766] bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] dark:border-[#005B3D]/50 hover:border-[#D4A72C] hover:bg-white transition-all cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Section */}
      <div className="text-center mb-12 mt-12">
        <h3 className="text-3xl font-poppins font-bold text-[#005B3D] dark:text-white mb-3">
          Additional <span className="text-[#D4A72C]">Skills</span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#005B3D] to-[#D4A72C] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {additionalSkillsData.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl group hover:border-[#D4A72C]/60 transition-all relative overflow-hidden shadow-sm"
            >
              <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <Icon size={120} className="text-[#005B3D]" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#DFF3E9] dark:bg-[#005B3D]/30 border border-[#DDE9E3] flex items-center justify-center">
                  <Icon size={24} className="text-[#005B3D] dark:text-[#E7C766]" />
                </div>
                <h4 className="text-xl font-poppins font-bold text-[#005B3D] dark:text-white">{skillGroup.category}</h4>
              </div>

              <div className="flex flex-col gap-5">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-[var(--text-light)]">{skill.name}</span>
                      <span className="text-[#D4A72C] font-semibold font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#DFF3E9] dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-[#005B3D] via-[#087A4B] to-[#D4A72C] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
