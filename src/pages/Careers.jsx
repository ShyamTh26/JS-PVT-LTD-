import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./styles/Careers.css";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="page careers">
        <h1>Careers at JSTechHub</h1>
        <p>We’re always looking for talented, passionate individuals to join our growing team.</p>
        <ul>
          <li>🔧 Software Engineers</li>
          <li>🎨 UI/UX Designers</li>
          <li>🧠 Project Managers</li>
          <li>🤝 Client Success Specialists</li>
        </ul>
        <p>
          If you're interested in working with us, please email your resume to: <strong>careers@jspvtltd.com</strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
