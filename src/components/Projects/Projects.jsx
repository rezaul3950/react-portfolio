import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "A high-performance online store built with React and Redux, featuring a seamless checkout experience.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/Project-1.jpg", // Public folder path
      live: "https://mobile-shop-woad.vercel.app",
      github: "https://github.com/rezaul3950/mobile-shop.git"
    },
    {
      id: 2,
      title: "Social Dashboard",
      description: "Real-time data visualization platform with interactive charts and dark mode support.",
      tech: ["Next.js", "Tailwind", "Chart.js"],
      image: "/project-2.png",
      live: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio with smooth animations and a focus on clean typography and UI.",
      tech: ["HTML", "CSS3"],
      image: "/Project-3.jpg",
      live: " https://rezaul3950.github.io/My-Portfolio",
      github: " https://github.com/rezaul3950/My-Portfolio"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Header Section - Matches Skills Style */}
        <div className="header">
          <p className="v12-pre-title">
             <span>//</span> 02. PORTFOLIO
          </p>
          <h2 className="v12-headline">
            <span className="v12-highlight">Latest</span> Projects
          </h2>
          <p className="projects-sub-text">
            // Exploring new technologies through building real-world applications and scalable solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <a href={project.live} target="_blank" rel="noreferrer" className="view-btn">
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <div className="tech-tags">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tech-stack">{t}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="details-link">
                    GitHub <span className="arrow">↗</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="details-link">
                    Live Demo <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;