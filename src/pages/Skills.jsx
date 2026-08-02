import { motion } from 'framer-motion';
import { Layout, FileSpreadsheet, Calculator } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Mantine UI"],
    color: "#00B4D8"
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Django", "REST APIs"],
    color: "#0077B6"
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL"],
    color: "#48CAE4"
  },
  {
    category: "Tools & Others",
    skills: ["GitHub", "Git", "Android Studio", "VS Code", "Canva", "Vercel"],
    color: "#90E0EF"
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
          My <span className="text-[#00B4D8]">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter">
          A comprehensive overview of my technical expertise and the tools I use to build robust applications.
        </p>
      </div>

      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {skillsData.map((skillGroup, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            className="glass-card p-8 rounded-3xl hover:shadow-[0_0_30px_rgba(0,180,216,0.15)] transition-all duration-300"
          >
            <h3 className="text-2xl font-poppins font-bold mb-6 flex items-center gap-3" style={{ color: skillGroup.color }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skillGroup.color }}></div>
              {skillGroup.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[var(--text-light)] bg-[var(--input-bg)] border border-[var(--input-border)] hover:border-[#00B4D8]/50 hover:bg-[#00B4D8]/10 transition-colors cursor-default"
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
        <h3 className="text-3xl font-poppins font-bold text-[var(--text-main)] mb-4">
          Additional <span className="text-[#00B4D8]">Skills</span>
        </h3>
        <div className="w-16 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {additionalSkillsData.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl group hover:border-[#00B4D8]/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Icon size={120} className="text-[#00B4D8]" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center">
                  <Icon size={24} className="text-[#00B4D8]" />
                </div>
                <h4 className="text-xl font-poppins font-bold text-[var(--text-main)]">{skillGroup.category}</h4>
              </div>

              <div className="flex flex-col gap-5">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-[var(--text-light)]">{skill.name}</span>
                      <span className="text-[#00B4D8] font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[var(--input-bg)] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] rounded-full"
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
