import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Building2, 
  Trophy, 
  Eye, 
  X, 
  Sparkles, 
  Calendar, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Download, 
  Printer, 
  RotateCcw,
  FileText
} from 'lucide-react';

const timelineData = [
  {
    title: "Computer Applications",
    organization: "Melisha Vocational Training Centre",
    period: "23/11/2020 – 15/07/2021",
    badge: "Completed",
    icon: Award,
    description: (
      <p>
        Successfully completed a Computer Applications course covering Microsoft Office Suite, computer fundamentals, internet usage, document creation, spreadsheets, presentations, and digital productivity skills. Awarded an official certificate upon successful completion.
      </p>
    )
  },
  {
    title: "Bachelor Degree in Computer Science",
    organization: "State University of Zanzibar (SUZA)",
    period: "2023 – Present",
    badge: "Graduated",
    icon: GraduationCap,
    description: (
      <p>
        Completed a Bachelor's Degree in Computer Science at the State University of Zanzibar (SUZA). Throughout my studies, I gained strong knowledge in software engineering, web development, mobile application development, databases, algorithms, system analysis and design, and software architecture while actively building full-stack software applications.
      </p>
    )
  },
  {
    title: "Software Developer Intern",
    organization: "Zanzibar Revenue Authority (ZRA)",
    period: "Second Year Field Training",
    badge: "Completed",
    icon: Building2,
    description: (
      <div className="space-y-3">
        <p>
          Successfully completed Industrial Field Training at the Zanzibar Revenue Authority (ZRA), where I gained valuable practical experience in software development, teamwork, problem-solving, and professional workplace practices.
        </p>
        <p>
          During the internship, I designed and developed a complete <strong className="text-[var(--accent-gold)] font-semibold">ZRA Help Desk System</strong> to improve IT support and issue management within the organization.
        </p>
        <p>
          After successfully completing the internship, I received an official Internship Completion Letter in recognition of my performance.
        </p>
      </div>
    )
  },
  {
    title: "Data Visualization Challenge",
    organization: "Resilience Academy",
    period: "1 August 2025 – 8 January 2026",
    badge: "Final Pitch Participant",
    icon: Trophy,
    description: (
      <div className="space-y-3">
        <p>
          Participated in the Data Visualization Challenge organized by Resilience Academy through the State University of Zanzibar (SUZA).
        </p>
        <p>
          Worked on data analysis and visualization challenges, collaborated with other participants, and successfully advanced to the Final Pitch stage, where innovative data-driven solutions were presented before judges and industry professionals.
        </p>
      </div>
    )
  },
  {
    title: "Software Developer",
    organization: "Freelance & Academic Projects",
    period: "Present",
    badge: "Active",
    icon: Briefcase,
    description: (
      <p>
        Developing modern full-stack web and mobile applications using React.js, Spring Boot, Flutter, PostgreSQL, Firebase, Tailwind CSS, and Figma. Experienced in designing RESTful APIs, responsive user interfaces, database architecture, authentication systems, and complete software solutions from concept to deployment.
      </p>
    )
  }
];

const certificatesData = [
  {
    id: "cert-1",
    title: "Computer Applications Certificate",
    organization: "Melisha Vocational Training Centre",
    date: "15 July 2021",
    credentialId: "MVTC-2021-0892",
    badge: "Certified",
    icon: Award,
    fileUrl: "/certificates/computer-application-certificate.pdf",
    fallbackSvg: "/certificates/computer-application-certificate.svg",
    fileType: "pdf",
    description: "Successfully completed Computer Applications training covering Microsoft Office Suite, computer fundamentals, internet usage, document creation, spreadsheets, presentations, and digital productivity skills."
  },
  {
    id: "cert-2",
    title: "Data Visualization Challenge Certificate",
    organization: "Resilience Academy & SUZA",
    date: "8 January 2026",
    credentialId: "RA-DVC-2026-042",
    badge: "Final Pitch Competitor",
    icon: Trophy,
    fileUrl: "/certificates/data-visualization-certificate.pdf",
    fallbackSvg: "/certificates/data-visualization-certificate.svg",
    fileType: "pdf",
    description: "Participated in the Data Visualization Challenge through the State University of Zanzibar (SUZA). Successfully reached the Final Pitch stage after presenting innovative data visualization solutions."
  },
  {
    id: "cert-3",
    title: "Industrial Training Completion Letter",
    organization: "Zanzibar Revenue Authority (ZRA)",
    date: "2025",
    credentialId: "ZRA/HR/IFT/2025/112",
    badge: "Completed Internship",
    icon: Building2,
    fileUrl: "/certificates/zra-internship-letter.pdf",
    fallbackSvg: "/certificates/zra-internship-letter.svg",
    fileType: "pdf",
    description: "Awarded an official Internship Completion Letter after successfully completing Industrial Field Training and developing the ZRA Help Desk System."
  }
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [pdfLoadError, setPdfLoadError] = useState(false);
  
  const modalRef = useRef(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
    setIsFullscreen(false);
    setPdfLoadError(false);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch((err) => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch((err) => console.log(err));
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    if (!selectedCert) return;
    const link = document.createElement('a');
    link.href = pdfLoadError ? selectedCert.fallbackSvg : selectedCert.fileUrl;
    link.download = `${selectedCert.title.toLowerCase().replace(/ /g, '-')}.${pdfLoadError ? 'svg' : selectedCert.fileType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const activeSrc = pdfLoadError ? selectedCert.fallbackSvg : selectedCert.fileUrl;
    const printWindow = window.open(activeSrc, '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.print();
    }
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
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
      {/* SECTION 1: EXPERIENCE TIMELINE */}
      <div id="work-experience" className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] mb-3 shadow-sm">
            <span className="text-[var(--accent-gold)] text-xs">✦</span>
            <span className="text-[var(--badge-text)] font-semibold text-xs tracking-wider uppercase font-mono">
              CAREER PROGRESSION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            Work <span className="text-[var(--accent-gold)]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--button-primary)] via-[var(--accent)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-[var(--button-primary)] pl-8 ml-4 md:ml-0">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="mb-12 relative">
                <div className="absolute -left-[43px] top-0 w-10 h-10 rounded-full bg-[var(--button-primary)] border-2 border-[var(--surface-solid)] ring-4 ring-[var(--accent-gold)]/30 flex items-center justify-center shadow-lg">
                  <IconComponent size={18} className="text-[var(--accent-gold)]" />
                </div>
                
                <div className="glass-card p-6 md:p-8 rounded-3xl relative hover:border-[var(--border-glow)] hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-[var(--text-primary)]">{item.title}</h3>
                      <h4 className="text-lg text-[var(--accent-gold)] font-inter font-medium mt-1">{item.organization}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                      <span className="text-[var(--badge-text)] font-mono font-medium bg-[var(--badge-bg)] border border-[var(--badge-border)] px-3 py-1 rounded-full text-xs whitespace-nowrap">
                        {item.badge}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">{item.period}</span>
                    </div>
                  </div>
                  
                  <div className="text-[var(--text-secondary)] font-inter leading-relaxed mt-4">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: EDUCATION & CERTIFICATIONS */}
      <div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] mb-3 shadow-sm">
            <span className="text-[var(--accent-gold)] text-xs">✦</span>
            <span className="text-[var(--badge-text)] font-semibold text-xs tracking-wider uppercase font-mono">
              ACADEMIC & CREDENTIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            Education &amp; <span className="text-[var(--accent-gold)]">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--button-primary)] via-[var(--accent)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: EDUCATION */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] text-[var(--accent-gold)] flex items-center justify-center border border-[var(--border)] shadow-sm">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-primary)]">Education</h3>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden hover:border-[var(--border-glow)] transition-all shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-medium text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-3 py-1 rounded-full">
                  Computer Science Graduate
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono flex items-center gap-1">
                  <Calendar size={14} /> 2023 – Present
                </span>
              </div>

              <h4 className="text-2xl font-poppins font-bold text-[var(--text-primary)] mb-2">
                Bachelor of Computer Science
              </h4>
              <p className="text-[var(--accent-gold)] font-inter font-semibold text-lg mb-6">
                State University of Zanzibar (SUZA)
              </p>

              <div className="border-t border-[var(--border)] pt-6">
                <p className="text-[var(--text-secondary)] font-inter leading-relaxed text-sm">
                  Graduated with a Bachelor's Degree in Computer Science from the State University of Zanzibar (SUZA), focusing on Software Engineering, Web Development, Mobile Application Development, Database Systems, Algorithms, System Analysis &amp; Design, Artificial Intelligence, and Software Architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Software Engineering", "Web Dev", "Mobile Apps", "Database Systems", "AI & Architecture"].map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono font-medium text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CERTIFICATIONS */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] text-[var(--accent-gold)] flex items-center justify-center border border-[var(--border)] shadow-sm">
                <Award size={22} />
              </div>
              <h3 className="text-2xl font-poppins font-bold text-[var(--text-primary)]">Certifications &amp; Achievements</h3>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {certificatesData.map((cert) => {
                const CertIcon = cert.icon;
                return (
                  <div 
                    key={cert.id}
                    className="glass-card p-6 rounded-2xl hover:border-[var(--border-glow)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--button-primary)] transition-colors">
                        <CertIcon size={22} className="text-[var(--accent-gold)] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="text-lg font-poppins font-bold text-[var(--text-primary)]">{cert.title}</h4>
                          <span className="text-[10px] font-mono text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2 py-0.5 rounded-full">
                            {cert.badge}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--accent-gold)] font-inter">{cert.organization} • <span className="text-xs text-[var(--text-muted)] font-mono">{cert.date}</span></p>
                        <p className="text-xs text-[var(--text-muted)] font-inter mt-2 line-clamp-2">{cert.description}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => openModal(cert)}
                      className="shrink-0 text-xs font-inter font-medium text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] border border-[var(--accent-gold)]/50 px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
                    >
                      <Eye size={14} className="text-[var(--accent-gold)]" /> View Certificate
                    </button>
                  </div>
                );
              })}

              {/* FUTURE READY CARD */}
              <div className="glass-card p-6 rounded-2xl border border-dashed border-[var(--border)] hover:border-[var(--accent-gold)] transition-colors flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] flex items-center justify-center shrink-0 border border-[var(--border)]">
                  <Sparkles size={22} className="text-[var(--accent-gold)] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-poppins font-bold text-[var(--text-primary)]">More Certifications Coming Soon</h4>
                  <p className="text-xs text-[var(--text-muted)] font-inter mt-1 leading-relaxed">
                    I am passionate about continuous learning and regularly improving my technical skills through professional certifications, workshops, hackathons, and technology training.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FULLSCREEN CERTIFICATE VIEWER MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--bg)] text-[var(--text-primary)] rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col border border-[var(--accent-gold)]/40 shadow-2xl overflow-hidden relative"
            >
              {/* MODAL HEADER METADATA */}
              <div className="p-4 md:p-6 bg-[var(--surface-2)] border-b border-[var(--border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--surface)] border border-[var(--accent-gold)]/40 flex items-center justify-center shrink-0">
                    <Award size={24} className="text-[var(--accent-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-poppins font-bold text-[var(--text-primary)] flex items-center gap-2 flex-wrap">
                      {selectedCert.title}
                      <span className="text-[10px] font-mono text-[var(--badge-text)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2.5 py-0.5 rounded-full">
                        {selectedCert.badge}
                      </span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-inter mt-1">
                      <span className="text-[var(--accent-gold)] font-medium">{selectedCert.organization}</span>
                      <span>•</span>
                      <span>{selectedCert.date}</span>
                      {selectedCert.credentialId && (
                        <>
                          <span>•</span>
                          <span className="font-mono text-[var(--text-secondary)]">ID: {selectedCert.credentialId}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 md:static p-2.5 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-2)] text-[var(--text-primary)] transition-all border border-[var(--border)]"
                  title="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* TOOLBAR CONTROLS */}
              <div className="px-4 py-3 bg-[var(--surface)] border-b border-[var(--border)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleZoomIn}
                    className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-gold)] text-[var(--text-primary)] transition-colors flex items-center gap-1"
                    title="Zoom In"
                  >
                    <ZoomIn size={16} /> <span className="hidden sm:inline">Zoom In</span>
                  </button>
                  <button 
                    onClick={handleZoomOut}
                    className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-gold)] text-[var(--text-primary)] transition-colors flex items-center gap-1"
                    title="Zoom Out"
                  >
                    <ZoomOut size={16} /> <span className="hidden sm:inline">Zoom Out</span>
                  </button>
                  <button 
                    onClick={handleResetZoom}
                    className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-gold)] text-[var(--text-primary)] transition-colors flex items-center gap-1"
                    title="Fit to Screen"
                  >
                    <RotateCcw size={16} /> <span className="hidden sm:inline">Reset ({Math.round(zoomLevel * 100)}%)</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-gold)] text-[var(--text-primary)] transition-colors flex items-center gap-1"
                    title="Full Screen"
                  >
                    {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                    <span className="hidden sm:inline">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                  </button>
                  <button 
                    onClick={handlePrint}
                    className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] hover:border-[var(--accent-gold)] text-[var(--text-primary)] transition-colors flex items-center gap-1"
                    title="Print Certificate"
                  >
                    <Printer size={16} /> <span className="hidden sm:inline">Print</span>
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="p-2 rounded-lg bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-[var(--button-primary-text)] font-semibold border border-[var(--accent-gold)]/40 transition-colors flex items-center gap-1"
                    title="Download Certificate"
                  >
                    <Download size={16} className="text-[var(--accent-gold)]" /> <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              </div>

              {/* CANVAS / VIEW AREA */}
              <div 
                className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[var(--bg-secondary)] relative cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div 
                  className="transition-transform duration-150 ease-out max-w-full max-h-full flex items-center justify-center"
                  style={{ 
                    transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  {!pdfLoadError ? (
                    <iframe
                      src={`${selectedCert.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      title={selectedCert.title}
                      className="w-[850px] h-[550px] max-w-[90vw] max-h-[72vh] rounded-xl shadow-2xl border border-[var(--accent-gold)]/30 bg-white"
                      onError={() => setPdfLoadError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)] text-center max-w-md">
                      <FileText size={48} className="text-[var(--accent-gold)] mb-4" />
                      <h4 className="text-lg font-poppins font-bold text-[var(--text-primary)] mb-2">Certificate Preview Unavailable</h4>
                      <p className="text-xs text-[var(--text-muted)] mb-6 leading-relaxed">
                        Unable to render PDF preview directly in browser iframe. You can download or open the official certificate file.
                      </p>
                      <button 
                        onClick={handleDownload}
                        className="px-5 py-2.5 bg-[var(--button-primary)] text-[var(--button-primary-text)] font-semibold rounded-xl text-xs flex items-center gap-2 hover:bg-[var(--button-primary-hover)] border border-[var(--accent-gold)]/40 transition-colors"
                      >
                        <Download size={16} className="text-[var(--accent-gold)]" /> Download PDF Certificate
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
