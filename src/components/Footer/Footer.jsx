import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();

    if (!email) return alert("Enter email!");

    setLoading(true);

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_8tieceh",
        "template_kfyjyzg",
        templateParams,
        "EqUvqwLE6IV3gQuWI"
      )
      .then(() => {
        alert("Subscribed 🚀");
        setEmail("");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed ❌");
        setLoading(false);
      });
  };

  // ✅ FIXED SCROLL FUNCTION
  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* BLUR BACKGROUND */}
      <div className="bg-blur one"></div>
      <div className="bg-blur two"></div>

      <div className="footer-box">
        {/* LEFT */}
        <div className="footer-col brand">
          <h2>Rezaul Karim</h2>

          <p>
            I craft high-performance, visually stunning web experiences
            with modern technologies & smooth UI.
          </p>

          <div className="socials">
            <a href="https://github.com/rezaul3950" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mdrezaulkarim4119/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/mdreza.mia.1848" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Frontend Development</a>
          <a href="#services">Web Development</a>
          <a href="#services">UI/UX Design</a>
          <a href="#services">Responsive Design</a>
        </div>

        {/* NAV */}
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Stay in the loop</h4>
          <p>Get premium updates, tips & projects.</p>

          <div className="input-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleJoin}>
              {loading ? "Joining..." : "Join"}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Rezaul Karim — All rights reserved</p>

        {/* ✅ FIXED BUTTON */}
        <button
          type="button"
          className="top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;