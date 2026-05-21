import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-poppins font-bold text-[var(--text-main)] mb-4">
          Get In <span className="text-[#00B4D8]">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-[#00B4D8] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div className="glass-card p-6 rounded-3xl flex items-center gap-6 hover:border-[#00B4D8]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-[#00B4D8]" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-bold text-[var(--text-main)] mb-1">Email Me</h4>
              <a href="mailto:zubeyramy@gmail.com" className="text-[var(--text-muted)] hover:text-[#00B4D8] transition-colors font-inter">
                zubeyramy@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl flex items-center gap-6 hover:border-[#00B4D8]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="text-[#00B4D8]" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-bold text-[var(--text-main)] mb-1">Call Me</h4>
              <a href="tel:+255772327918" className="text-[var(--text-muted)] hover:text-[#00B4D8] transition-colors font-inter">
                +255 772 327 918
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl flex items-center gap-6 hover:border-[#00B4D8]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="text-[#00B4D8]" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-bold text-[var(--text-main)] mb-1">WhatsApp</h4>
              <a href="https://wa.me/255772327918" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[#00B4D8] transition-colors font-inter">
                +255 772 327 918
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl flex items-center gap-6 hover:border-[#00B4D8]/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-[#00B4D8]" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-poppins font-bold text-[var(--text-main)] mb-1">Location</h4>
              <p className="text-[var(--text-muted)] font-inter">Zanzibar, Tanzania</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:border-[#00B4D8] transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute left-4 top-3 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00B4D8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#00B4D8]">
                  Your Name
                </label>
              </div>
              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:border-[#00B4D8] transition-colors peer"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute left-4 top-3 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00B4D8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#00B4D8]">
                  Your Email
                </label>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-4">
              <input 
                type="text" 
                id="subject"
                required
                className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:border-[#00B4D8] transition-colors peer"
                placeholder=" "
              />
              <label htmlFor="subject" className="absolute left-4 top-3 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00B4D8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#00B4D8]">
                Subject
              </label>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-4">
              <textarea 
                id="message"
                required
                rows="5"
                className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3 text-[var(--text-main)] focus:outline-none focus:border-[#00B4D8] transition-colors peer resize-none"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-[var(--text-muted)] transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#00B4D8] peer-valid:-top-6 peer-valid:text-sm peer-valid:text-[#00B4D8]">
                Your Message
              </label>
            </div>
            
            <button type="submit" className="mt-4 px-8 py-3 rounded-xl bg-[#00B4D8] text-[var(--text-main)] font-medium hover:bg-[#0077B6] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] w-full sm:w-auto self-start">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
