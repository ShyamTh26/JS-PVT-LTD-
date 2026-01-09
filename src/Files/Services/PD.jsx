import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const PD = () => {

  return (
    <>
      <Navbar />
      <div className="files-container">
        <h1 className="files-title">Personality Development</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Technical knowledge alone isn't enough—our Personality Development program helps shape your soft skills for professional success. <br />
          You’ll learn communication, confidence building, group discussion techniques, and email etiquette. <br />
          We conduct mock HR interviews to train you for real-world workplace dynamics. <br />
          Time management, teamwork, and leadership exercises are core elements. <br />
          This course ensures that you not only have technical skills but also present yourself well during interviews and at work. <br />
          These sessions are led by experienced mentors who guide you toward becoming a well-rounded professional.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>
      <Footer />
    </>
  );
};

export default PD;
