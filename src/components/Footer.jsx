import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="footer-section">
            <h2 className="footer-title">🚀 JSTechHub </h2>
            <p className="footer-text">
              A focused team of 125+ specialists in object-oriented programming,
              database architecture, and AI solutions.
            </p>
            <div className="footer-icons">
              <FaFacebook className="social-icon facebook" />
              <FaTwitter className="social-icon twitter" />
              <FaLinkedin className="social-icon linkedin" />
              <FaGithub className="social-icon github" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h2 className="footer-title">📌 Quick Links</h2>
            <ul className="footer-links">
              <li>💼 About Us</li>
              <li>🛠️ Development Process</li>
              <li>🎯 Engagement Model</li>
              <li>📜 Testimonials</li>
              <li>🚀 Careers</li>
              <li>📝 Blog</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h2 className="footer-title">📞 Contact Us</h2>
            <ul className="footer-links">
              <li><MdLocationOn className="icon red" /> Shop No. - 6, First Floor, GoodWill Zest County,Pune,411047</li>
              <li><MdPhone className="icon green" /> +91 8789917995</li>
              <li><MdEmail className="icon yellow" />hr@jsinfohub.com</li>
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>© 2025 JSTechHub. All rights reserved.</p>
          <div className="footer-policy">
            <span>🔒 Privacy Policy</span>
            <span>📜 Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
