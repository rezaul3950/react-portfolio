import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Skills.css';

const skillData = [
  { name: "React", icon: SiIcons.SiReact, color: "#61DAFB", exp: "3+ Years" },
  { name: "Next.js", icon: SiIcons.SiNextdotjs, color: "#ffffff", exp: "2+ Years" },
  { name: "TypeScript", icon: SiIcons.SiTypescript, color: "#3178C6", exp: "2+ Years" },
  { name: "JavaScript", icon: SiIcons.SiJavascript, color: "#F7DF1E", exp: "4+ Years" },
  { name: "HTML5", icon: SiIcons.SiHtml5, color: "#E34F26", exp: "5+ Years" },
  { name: "CSS3", icon: SiIcons.SiCss3 || SiIcons.SiCss, color: "#1572B6", exp: "5+ Years" },
  { name: "Tailwind", icon: SiIcons.SiTailwindcss, color: "#38BDF8", exp: "2+ Years" },
  { name: "Redux", icon: SiIcons.SiRedux, color: "#764ABC", exp: "1.5+ Years" },
  { name: "Framer", icon: SiIcons.SiFramer, color: "#FF0080", exp: "1+ Years" },
  { name: "Git", icon: SiIcons.SiGit, color: "#F34F29", exp: "4+ Years" },
  { name: "GitHub", icon: SiIcons.SiGithub, color: "#ffffff", exp: "4+ Years" },
];

const Skills = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            opacity: { value: 0.3 },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.3, direction: "none" }
          },
          interactivity: { detect_on: "canvas" }
        }}
      />

      <div className="container">
        <header className="header">
          <motion.div className="v12-pre-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Terminal size={14} /> <span>0x789 // STACK_CAPABILITIES</span>
          </motion.div>
          <motion.h2 className="v12-headline" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
            DEVELOPER <span className="v12-highlight">STACK</span>
          </motion.h2>
          <p className="skills-sub-text">// BUILDING MODERN & SCALABLE APPS</p>
        </header>

        <motion.div 
          className="skills-grid"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="orbit-path"></div>
          <div className="planet-center">
            <span className="center-text">&lt;/&gt;</span>
          </div>

          {skillData.map((skill, index) => {
            const Icon = skill.icon;
            const angle = (index / skillData.length) * 360;
            return (
              <div key={index} className="orbit-item" style={{ '--angle': `${angle}deg` }}>
                <motion.div className="skill-card" whileHover={{ scale: 1.3, rotate: 0 }}>
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    {Icon && <Icon size={26} />}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-tooltip">{skill.exp}</span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;