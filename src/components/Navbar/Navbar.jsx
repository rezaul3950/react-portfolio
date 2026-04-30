import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="progress"></div>

      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="logo">MyPortfolio</h2>

        <div className={`nav-links ${open ? "active" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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