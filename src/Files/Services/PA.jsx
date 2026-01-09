import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const PA = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Placement Assistance</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Our Placement Assistance program bridges the gap between training and employment. <br />
          We provide end-to-end support from resume building to mock interviews and aptitude preparation. <br />
          Weekly hiring updates, referrals, and interview scheduling assistance ensure you're industry-ready. <br />
          Sessions include technical and HR interview preparation, behavioral questions, and communication skill building.<br />
          We help you tailor your resume and LinkedIn profile to match current job trends. <br />
          Through tie-ups with companies and consultancies, we actively recommend eligible candidates. <br />
          You’ll also learn how to network and apply effectively across multiple platforms.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default PA;