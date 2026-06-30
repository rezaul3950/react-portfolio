import React, { useRef, useState } from 'react';
import { Terminal, Mail, Send } from 'lucide-react';
import { FaFacebook, FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';   // ✅ ADD THIS
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_8tieceh',       // ✅ তোমার Service ID
      'template_kfyjyzg',      // ✅ তোমার Template ID
      formRef.current,
      'EqUvqwLE6IV3gQuWI'      // ✅ তোমার Public Key
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send message");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section className="unified-section" id="contact">
      <div className="contact-container">

        <header className="section-header">
          <div className="pre-title">
            <Terminal size={14} /> 0x200 // CONNECTION_ESTABLISHED
          </div>

          <h2 className="main-headline">
             <span className="normal-text">Let's build </span>
             <span className="stroke-text">Extraordinary</span>
          </h2>

          <p className="sub-text">
            // Have a project in mind? Drop a message and let's collaborate.
          </p>
        </header>

        <div className="contact-grid">

          <div className="meta-block">

            <div className="corp-card">
              <Mail className="corp-icon" />
              <div>
                <span className="card-meta">Email Me</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mdrezaulkarim4119@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-link"
                >
                  REZAUL KARIM / Gmail
                </a>
              </div>
            </div>

            <div className="corp-card">
              <FaFacebook className="corp-icon" />
              <div>
                <span className="card-meta">Facebook</span>
                <a
                  href="https://www.facebook.com/mdreza.mia.1848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-link"
                >
                  Rë Zä Ül / Facebook
                </a>
              </div>
            </div>

            <div className="corp-card">
              <FaGithub className="corp-icon" />
              <div>
                <span className="card-meta">GitHub</span>
                <a
                  href="https://github.com/rezaul3950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-link"
                >
                  rezaul3950 / GitHub
                </a>
              </div>
            </div>

          </div>

          {/* ✅ FORM */}
          <form ref={formRef} onSubmit={handleSend} className="glass-card form-terminal">

            <div className="input-group">
              <input type="text" name="user_name" required placeholder="Full Name" />
              <input type="email" name="user_email" required placeholder="Email Address" />
            </div>

            <input type="text" name="subject" required placeholder="Subject" />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project..."
            ></textarea>

            <button type="submit" className="prime-submit-btn" disabled={isSending}>
              {isSending ? 'SENDING...' : 'SEND MESSAGE'} <Send size={16} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;