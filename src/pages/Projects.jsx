import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './styles/Projects.css';

const projects = [
    {
      title: 'Security Vault App',
      industry: 'Cybersecurity',
      description: 'Developed a secure, encrypted vault for storing sensitive data with multi-factor authentication and real-time alerts.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    },
    {
      title: 'Transport Tracking App',
      industry: 'Logistics',
      description: 'Created a real-time transport tracking app to monitor fleet locations, optimize routes, and improve logistics efficiency.',
      tech: ['React Native', 'Firebase', 'Google Maps API'],
    },
    {
      title: 'Authentication & Authorization System',
      industry: 'Security',
      description: 'Built a robust authentication and authorization system for a scalable platform, supporting OAuth2, JWT, and role-based access control.',
      tech: ['Node.js', 'Passport.js', 'JWT', 'MongoDB'],
    },
    {
      title: 'Company Website Development',
      industry: 'Web Development',
      description: 'Designed and developed a modern, responsive website for a corporate client, featuring an interactive user experience and CMS integration.',
      tech: ['React', 'CSS3', 'Node.js', 'WordPress'],
    },
  ];
  

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="page projects">
        <h1>Our Projects</h1>
        <p className="intro">
          We take pride in building impactful digital solutions for a range of industries, from finance to education and healthcare.
        </p>
        <hr/>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <h4>{project.industry}</h4>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.tech.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
