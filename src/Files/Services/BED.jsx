import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const BED = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Backend Development</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Dive deep into server-side development with our Backend Development program.<br />
          Learn to build scalable and secure RESTful APIs using Java (Spring Boot) or Node.js.<br />
          Gain expertise in working with relational (MySQL) and NoSQL (MongoDB) databases.<br />
          The course covers authentication using JWT, session management, error handling, and logging.<br />
          You’ll also implement role-based access control and middleware logic for enterprise-grade applications.<br />
          We cover deployment using services like AWS or Render.<br />
          With multiple hands-on projects, this course prepares you for real backend development challenges.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default BED;
