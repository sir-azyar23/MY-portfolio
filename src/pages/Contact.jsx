import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email.trim())) {
      setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_aq3balk';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hz2elgu';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'chw55OAdvYJqeqbDI';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'zubeirame11@gmail.com',
        },
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: null
      });

      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 6000);

    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Failed to send your message. Please try again later.'
      });
    }
  };

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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] mb-3 shadow-sm">
          <span className="text-[var(--accent-gold)] text-xs">✦</span>
          <span className="text-[var(--badge-text)] font-semibold text-xs tracking-wider uppercase font-mono">
            LET'S CONNECT
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[var(--text-primary)] mb-4 tracking-tight">
          Get In <span className="text-[var(--accent-gold)]">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--button-primary)] via-[var(--accent)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto font-inter text-sm sm:text-base">
          Have a project in mind, a job opportunity, or want to collaborate? Feel free to reach out anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Info Side */}
        <motion.div variants={itemVariants} className="glass-card p-8 md:p-10 rounded-3xl shadow-xl flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl font-poppins font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
            Contact Information
          </h3>
          <p className="text-[var(--text-secondary)] font-inter text-sm mb-4 leading-relaxed">
            I'm always open to discussing new software development projects, creative ideas, or engineering opportunities.
          </p>

          <div className="flex flex-col gap-5">
            <div className="bg-[var(--surface-2)] border border-[var(--border)] p-5 rounded-2xl flex items-center gap-5 hover:border-[var(--accent-gold)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-solid)] flex items-center justify-center shrink-0 border border-[var(--border)] shadow-sm">
                <Mail className="text-[var(--accent-gold)]" size={22} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Email Me</h4>
                <a href="mailto:zubeirame11@gmail.com" className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-gold)] transition-colors font-inter text-sm sm:text-base">
                  zubeirame11@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-[var(--surface-2)] border border-[var(--border)] p-5 rounded-2xl flex items-center gap-5 hover:border-[var(--accent-gold)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-solid)] flex items-center justify-center shrink-0 border border-[var(--border)] shadow-sm">
                <Phone className="text-[var(--accent-gold)]" size={22} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Call Me</h4>
                <a href="tel:+255772327918" className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-gold)] transition-colors font-inter text-sm sm:text-base">
                  +255 772 327 918
                </a>
              </div>
            </div>

            <div className="bg-[var(--surface-2)] border border-[var(--border)] p-5 rounded-2xl flex items-center gap-5 hover:border-[var(--accent-gold)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-solid)] flex items-center justify-center shrink-0 border border-[var(--border)] shadow-sm">
                <MessageSquare className="text-[var(--accent-gold)]" size={22} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">WhatsApp</h4>
                <a href="https://wa.me/255772327918" target="_blank" rel="noreferrer" className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-gold)] transition-colors font-inter text-sm sm:text-base">
                  +255 772 327 918
                </a>
              </div>
            </div>

            <div className="bg-[var(--surface-2)] border border-[var(--border)] p-5 rounded-2xl flex items-center gap-5 hover:border-[var(--accent-gold)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-solid)] flex items-center justify-center shrink-0 border border-[var(--border)] shadow-sm">
                <MapPin className="text-[var(--accent-gold)]" size={22} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">Location</h4>
                <p className="text-[var(--text-primary)] font-medium font-inter text-sm sm:text-base">Zanzibar, Tanzania</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="glass-card p-8 md:p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-poppins font-bold text-[var(--text-primary)] mb-6">
            Send Me a Message
          </h3>

          <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            {/* SUCCESS NOTIFICATION */}
            {status.success && (
              <div className="p-4 rounded-xl bg-[var(--badge-bg)] border border-[var(--accent)] text-[var(--text-primary)] text-sm flex items-center gap-3">
                <CheckCircle size={20} className="shrink-0 text-[var(--accent)]" />
                <span>Your message has been sent successfully. I will get back to you soon!</span>
              </div>
            )}

            {/* ERROR NOTIFICATION */}
            {status.error && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-sm flex items-center gap-3">
                <AlertCircle size={20} className="shrink-0 text-rose-500" />
                <span>{status.error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="text" 
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3.5 text-[var(--input-text)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all peer text-sm"
                  placeholder=" "
                />
                <label htmlFor="name" className={`absolute left-4 transition-all pointer-events-none ${formData.user_name ? '-top-5 text-xs text-[var(--accent-gold)] font-medium' : 'top-3.5 text-xs text-[var(--text-muted)] peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[var(--accent-gold)]'}`}>
                  Your Name
                </label>
              </div>

              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3.5 text-[var(--input-text)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all peer text-sm"
                  placeholder=" "
                />
                <label htmlFor="email" className={`absolute left-4 transition-all pointer-events-none ${formData.user_email ? '-top-5 text-xs text-[var(--accent-gold)] font-medium' : 'top-3.5 text-xs text-[var(--text-muted)] peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[var(--accent-gold)]'}`}>
                  Your Email
                </label>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-2">
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3.5 text-[var(--input-text)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all peer text-sm"
                placeholder=" "
              />
              <label htmlFor="subject" className={`absolute left-4 transition-all pointer-events-none ${formData.subject ? '-top-5 text-xs text-[var(--accent-gold)] font-medium' : 'top-3.5 text-xs text-[var(--text-muted)] peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[var(--accent-gold)]'}`}>
                Subject
              </label>
            </div>
            
            <div className="flex flex-col gap-2 relative group mt-2">
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl px-4 py-3.5 text-[var(--input-text)] focus:outline-none focus:border-[var(--accent-gold)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all peer resize-none text-sm"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className={`absolute left-4 transition-all pointer-events-none ${formData.message ? '-top-5 text-xs text-[var(--accent-gold)] font-medium' : 'top-3.5 text-xs text-[var(--text-muted)] peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[var(--accent-gold)]'}`}>
                Your Message
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={status.loading}
              className="mt-2 px-8 py-3.5 rounded-xl bg-[var(--button-primary)] text-[var(--button-primary-text)] font-medium hover:bg-[var(--button-primary-hover)] transition-all flex items-center justify-center gap-2 border border-[var(--accent-gold)]/50 shadow-md w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? (
                <>
                  <Loader2 size={18} className="animate-spin text-[var(--accent-gold)]" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="text-[var(--accent-gold)]" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
