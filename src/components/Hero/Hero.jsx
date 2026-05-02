import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../../assets/hero.png"; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT SIDE: Content */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mobile Ordering এর জন্য উপরের টেক্সটগুলোকে আলাদা ডিভে রাখা হয়েছে */}
          <div className="hero-text-content">
            <motion.div className="badge" variants={itemVariants}>
              <span className="dot"></span> 
              <span className="badge-text">Available for new opportunities</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Building <span className="gradient-text">Scalable</span> <br />
              Digital Solutions 
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              I'm <span className="highlight">Rezaul Karim</span>, a Frontend Specialist. 
              I bridge the gap between complex backend logic and pixel-perfect 
              user interfaces using <strong>React.js</strong> and <strong>Modern CSS</strong>.
            </motion.p>
          </div>

          {/* Social and Email: মোবাইলে এটি ছবির নিচে চলে যাবে */}
          <motion.div className="hero-social-wrapper" variants={itemVariants}>
            <p className="social-label">Connect with me</p>
            <div className="social-links">
              <a href="#" className="social-btn github">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="#" className="social-btn linkedin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-btn twitter">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-btn facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <div className="cta-minimal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <span>Or email at</span>
                <a href="mailto:mdrezaulkarim4119@gmail.com" className="email-link">mdrezaulkarim4119@gmail.com</a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Picture */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="premium-wrapper">
            <div className="glow-blur-1"></div>
            <motion.div className="decorative-ring" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}></motion.div>
            <div className="neon-circle-bg"></div>
            <div className="photo-box">
               <motion.img src={heroImg} alt="Rezaul Karim" className="hero-photo-pro" whileHover={{ scale: 1.05 }} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;