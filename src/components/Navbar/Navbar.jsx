import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // ১. এখানে 'projects' যোগ করে দিলাম যাতে সব সেকশন ট্র্যাক হয়
    const sections = ["home", "about", "skills", "services", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY >= 100) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="progress"></div>

      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="logo-container">
          <motion.img 
            src={navLogo} 
            alt="Rezaul Karim" 
            className="navbar-logo" 
            style={{ 
              transform: scrolled ? "scale(1.15)" : "scale(1.35)" 
            }}
            whileHover={{ 
              scale: scrolled ? 1.22 : 1.42,
              filter: "drop-shadow(0 0 15px rgba(0, 255, 213, 0.6))",
              transition: { duration: 0.2, ease: "easeOut" }
            }} 
            whileTap={{ scale: 0.95 }}
          />
        </div>

        {/* ২. এই অ্যারের ভেতরে "services" যোগ করা হয়েছে, যার কারণে মেনু শো করছিল না */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          {["home", "about", "skills", "services", "projects", "contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item}`}
              className={activeSection === item ? "active-link" : ""}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)} 
            >
              {item.toUpperCase()}
            </motion.a>
          ))}
        </div>

        <div className="menu" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </motion.nav>
    </>
  );
}