import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Internships.css";

// Internship Card Component
const InternshipCard = ({
  title,
  company,
  activelyHiring,
  workMode,
  duration,
  stipend,
  postedTime,
  tags,
  logo,
}) => {
  return (
    <div className="internship-card">
      <div className="internship-details">
        <h3 className="internship-title">{title}</h3>
        <div className="internship-company">
          {company} {activelyHiring && <span className="badge">Actively hiring</span>}
        </div>
        <div className="internship-info">
          <span>📍 {workMode}</span>
          <span>⏳ {duration}</span>
          <span>💰 {stipend}</span>
        </div>
        <div className="internship-meta">
          <span>🕒 {postedTime}</span>
          {tags.map((tag, index) => (
            <span key={index} className="internship-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="internship-logo">
        <img src={logo} alt={company} />
      </div>
    </div>
  );
};

// Internship Data
const internships = [
  {
    title: "Frontend Developer Intern",
    company: "TechSphere Solutions",
    activelyHiring: true,
    workMode: "Work from home",
    duration: "3 Months",
    stipend: "₹10,000/month",
    postedTime: "1 week ago",
    tags: ["React", "JavaScript", "CSS"],
    logo: "./img/FE.png"
  },
  {
    title: "Backend Developer Intern",
    company: "CodeCrafters Inc.",
    activelyHiring: true,
    workMode: "Hybrid",
    duration: "6 Months",
    stipend: "₹12,000/month",
    postedTime: "2 days ago",
    tags: ["Java", "Spring Boot", "MySQL"],
    logo: "./img/BE.png"
  },
  {
    title: "Data Science Intern",
    company: "DataNexus Labs",
    activelyHiring: false,
    workMode: "On-site",
    duration: "4 Months",
    stipend: "₹15,000/month",
    postedTime: "1 month ago",
    tags: ["Python", "Machine Learning", "Pandas"],
    logo: "./img/DS.png"
  },
  {
    title: "UI/UX Design Intern",
    company: "Pixel Perfect Studios",
    activelyHiring: true,
    workMode: "Work from home",
    duration: "2 Months",
    stipend: "₹8,000/month",
    postedTime: "5 days ago",
    tags: ["Figma", "Wireframing", "Prototyping"],
    logo: "./img/20.png"
  },
  {
    title: "DevOps Intern",
    company: "CloudOps Pvt Ltd",
    activelyHiring: true,
    workMode: "Hybrid",
    duration: "5 Months",
    stipend: "₹14,000/month",
    postedTime: "3 weeks ago",
    tags: ["AWS", "Docker", "CI/CD"],
    logo: "./img/DO.png"
  },
  {
    title: "Mobile App Developer Intern",
    company: "App Masters",
    activelyHiring: false,
    workMode: "On-site",
    duration: "6 Months",
    stipend: "₹11,000/month",
    postedTime: "2 weeks ago",
    tags: ["Flutter", "Android", "iOS"],
    logo: "./img/MAD.png"
  },
  {
    title: "Cyber Security Intern",
    company: "SecureNet Solutions",
    activelyHiring: true,
    workMode: "Work from home",
    duration: "3 Months",
    stipend: "₹13,000/month",
    postedTime: "6 days ago",
    tags: ["Penetration Testing", "Network Security", "Ethical Hacking"],
    logo: "./img/CS.png"
  },
  {
    title: "AI/ML Intern",
    company: "AI Innovations",
    activelyHiring: true,
    workMode: "Hybrid",
    duration: "6 Months",
    stipend: "₹20,000/month",
    postedTime: "4 days ago",
    tags: ["Artificial Intelligence", "Deep Learning", "NLP"],
    logo: "./img/AI.png"
  },
  {
    title: "QA Automation Intern",
    company: "Testify Technologies",
    activelyHiring: false,
    workMode: "On-site",
    duration: "4 Months",
    stipend: "₹10,000/month",
    postedTime: "1 month ago",
    tags: ["Selenium", "JUnit", "API Testing"],
    logo: "./img/QA.png"
  },
  {
    title: "Cloud Computing Intern",
    company: "SkyHigh Tech",
    activelyHiring: true,
    workMode: "Work from home",
    duration: "5 Months",
    stipend: "₹16,000/month",
    postedTime: "1 week ago",
    tags: ["Azure", "AWS", "GCP"],
    logo: "./img/CC.png"
  }
];


// Internship Container Component
const InternshipsContainer = () => {
  return (
    <div className="internships-container">
      {internships.map((internship, index) => (
        <InternshipCard key={index} {...internship} />
      ))}
    </div>
  );
};

// Main Internships Page
const Internships = () => {
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState(false);
  const [home, setHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [stipend, setStipend] = useState(0);

  // Filter logic
  const filteredInternships = internships.filter((internship) => {
    const stipendValue = parseInt(internship.stipend.replace("₹", "").replace("/month", "").replace(",", ""));
    
    return (
      (!profile || internship.title.toLowerCase().includes(profile.toLowerCase())) &&
      (!location || internship.workMode.toLowerCase().includes(location.toLowerCase())) &&
      (!home || internship.workMode === "Work from home") &&
      (!city || internship.workMode === "On-site") &&
      stipendValue >= stipend
    );
  });

  return (
    <>
      <Navbar />

      <div className="grid-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h4>Filters</h4>

          <div className="filter-group">
            <h6>Profile</h6>
            <input
              type="text"
              placeholder="e.g. Frontend"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <h6>Location</h6>
            <input
              type="text"
              placeholder="e.g. Work from home"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="city"
              checked={city}
              onChange={(e) => setCity(e.target.checked)}
            />
            <label htmlFor="city">Internships in my city</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="home"
              checked={home}
              onChange={(e) => setHome(e.target.checked)}
            />
            <label htmlFor="home">Work from home</label>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="partTime"
              checked={partTime}
              onChange={(e) => setPartTime(e.target.checked)}
            />
            <label htmlFor="partTime">Part-time</label>
          </div>

          <div className="filter-group">
            <h6>Stipend (₹)</h6>
            <input
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={stipend}
              onChange={(e) => setStipend(parseInt(e.target.value))}
            />
            <p>₹{stipend}</p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="content">
          <div className="internships-header">
            <h1>Internships</h1>
            <h3>All Summer/Winter Internships in JSTechHub</h3>
          </div>
          <hr />
          {/* Internships List */}
          <div className="internships-container">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship, index) => (
                <InternshipCard key={index} {...internship} />
              ))
            ) : (
              <p>No internships found matching your criteria.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Internships;