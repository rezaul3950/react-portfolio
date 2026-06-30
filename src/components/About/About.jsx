import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, Target, Download, Terminal } from "lucide-react";
import "./About.css";
import myAboutImg from "../../assets/About.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 }, // লেখাগুলো যাতে ডান দিক থেকে আরও স্মুথলি অ্যানিমেট হয়ে আসে
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="about-pro-elite" id="about">
      <div className="glow-mesh-bg"></div>
      
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left: Fixed Photo Section */}
          <motion.div 
            className="about-visual-v12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <div className="image-frame-v12">
              <img src={myAboutImg} alt="Rezaul Karim" className="main-img-v12" />
              <div className="v12-border-light"></div>
              <div className="v12-corner-accent"></div>
            </div>
            <div className="v12-badge-container">
              <div className="v12-live-indicator"><span className="dot"></span> Active Project</div>
            </div>
          </motion.div>

          {/* Right: Expanded Content (ডান পাশে সরানো হয়েছে) */}
          <motion.div 
            className="about-info-v12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* কোডার স্ট্যাটাস ট্যাগ */}
            <motion.div variants={itemVariants} className="v12-pre-title">
              <Terminal size={14} /> <span>0x01 // THE_MISSION:</span>
            </motion.div>
            
            {/* মেইন প্রিমিয়াম হেডিং */}
            <motion.h2 variants={itemVariants} className="v12-headline">
              Making the Web <span className="v12-highlight">Intelligent</span>
            </motion.h2>

            <div className="v12-details-stack">
              
              {/* Identity Card */}
              <motion.div variants={itemVariants} className="v12-glass-card">
                <div className="v12-icon-box"><Cpu size={18} className="v12-spin" /></div>
                <div className="v12-card-content">
                  <h3>Identity</h3>
                  <p>I am <strong>Rezaul Karim</strong>. A high-performance Software Engineer specializing in reactive frontend ecosystems.</p>
                </div>
              </motion.div>

              {/* Academic Timeline */}
              <motion.div variants={itemVariants} className="v12-glass-card">
                <div className="v12-icon-box"><GraduationCap size={18} /></div>
                <div className="v12-card-content">
                  <h3>Academic Path</h3>
                  <div className="v12-timeline">
                    <div className="v12-t-item">
                      <span className="v12-t-dot active"></span>
                      <p><strong>Bachelor of Science in Computer Science and Engineering (CSE)</strong> • Uttara University <span className="dim">Ongoing</span></p>
                    </div>
                    <div className="v12-t-item">
                      <span className="v12-t-dot"></span>
                      <p><strong>Diploma in Computer Technology (CST)</strong> •  Kurigram Polytechnic Institute <span className="dim">2020-25</span></p>
                    </div>
                    <div className="v12-t-item">
                      <span className="v12-t-dot"></span>
                      <p><strong>Secondary School Certificate (SSC)</strong> • Naldanga WC high School <span className="dim">2019-2020</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div variants={itemVariants} className="v12-glass-card">
                <div className="v12-icon-box"><Target size={18} /></div>
                <div className="v12-card-content">
                  <h3>Mission</h3>
                  <p>To architect seamless digital solutions where clean code meets superior user experience.</p>
                </div>
              </motion.div>

            </div>

            {/* Resume Button */}
            <motion.div variants={itemVariants} className="v12-actions">
              <a href="/resume.pdf" download className="v12-primary-btn">
                <span>PULL_CV.MANIFEST</span>
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;