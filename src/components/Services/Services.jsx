import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  Sparkles, 
  Zap,
  RefreshCw,
  Grid,
  Terminal // Skills সেকশনের মতো আইকন ম্যাচ করার জন্য ইম্পোর্ট করা হলো
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: "01",
    title: "UI/UX & Product Design",
    desc: "Crafting modern, user-centric wireframes and high-fidelity interactive prototypes. Focused on creating beautiful interfaces with seamless user journeys.",
    icon: <Layers />,
    tag: "Figma & Adobe XD",
    color: "#ff007a" // Figma Neon Pink
  },
  {
    id: "02",
    title: "Frontend Web Development",
    desc: "Turning design pixels into clean, maintainable, and structured component-driven code using modern React.js, Next.js, and TypeScript.",
    icon: <Code2 />,
    tag: "React & Next.js",
    color: "#00f0ff" // Cyber Blue
  },
  {
    id: "03",
    title: "Creative Animations",
    desc: "Bringing web interfaces to life with smooth, interactive, and storytelling animations using Framer Motion and GSAP to elevate UX.",
    icon: <Sparkles />,
    tag: "Framer Motion",
    color: "#9d4edd" // Neon Purple
  },
  {
    id: "04",
    title: "Performance & Optimization",
    desc: "Optimizing Core Web Vitals for lightning-fast loading speeds, clean responsiveness across all devices, and SEO-friendly structural coding.",
    icon: <Zap />,
    tag: "SEO & Speed",
    color: "#00ff87" // Neon Green
  },
  {
    id: "05",
    title: "Responsive Web Redesign",
    desc: "Transforming outdated, clunky websites into modern, ultra-responsive, and visually striking web platforms that look perfect on mobiles, tablets, and desktops.",
    icon: <RefreshCw />,
    tag: "Layout Overhaul",
    color: "#ffb703" // Warm Orange
  },
  {
    id: "06",
    title: "Component-Driven UI Development",
    desc: "Engineering pixel-perfect, reusable, and modular UI components using Tailwind CSS and React, ensuring consistency across your entire web asset lifecycle.",
    icon: <Grid />,
    tag: "Design Systems",
    color: "#e0aaff" // Soft Purple
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-blur-bg-1"></div>
      <div className="services-blur-bg-2"></div>

      <div className="services-container">
        
        {/* Header Section - Exactly Synced with Skills.jsx Structure */}
        <header className="services-header">
          <motion.div 
            className="v12-pre-title"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Terminal size={14} /> <span>0x101 // WHAT_I_DO_BEST</span>
          </motion.div>
          
          <motion.h2 
            className="v12-headline"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Premium <span className="v12-highlight">Services</span>
          </motion.h2>
          
          <motion.p 
            className="skills-sub-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            // Bridging the gap between stunning visual design and high-performance frontend engineering.
          </motion.p>
        </header>

        {/* Services Grid */}
        <div className="services-modern-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="service-modern-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Top Row: Icon & ID */}
              <div className="service-card-header">
                <div 
                  className="service-modern-icon"
                  style={{ 
                    color: service.color,
                    background: `${service.color}12`,
                    boxShadow: `0 0 20px ${service.color}20`
                  }}
                >
                  {service.icon}
                </div>
                <span className="service-modern-id">{service.id}</span>
              </div>

              {/* Body */}
              <h3 className="service-modern-title">{service.title}</h3>
              <p className="service-modern-desc">{service.desc}</p>

              {/* Footer Tech Tag */}
              <div className="service-modern-footer">
                <span className="service-tech-tag" style={{ borderLeft: `3px solid ${service.color}` }}>
                  {service.tag}
                </span>
              </div>

              {/* Hover Glow Layer */}
              <div 
                className="card-glow-layer" 
                style={{ background: `radial-gradient(circle at 50% -20%, ${service.color}15, transparent 70%)` }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;