import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const FSD = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Full Stack Development</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Our Full Stack Development program equips you with both frontend and backend skills.<br />
          You’ll build dynamic web applications using HTML, CSS, JavaScript, React.js, Node.js, and Spring Boot. <br />
          Database integration using MySQL or MongoDB is included. <br />
          Learn how to implement authentication, routing, state management, and deployment.<br />
          You will also work on RESTful API development, version control with Git, and team-based coding.<br />
          The course ends with a capstone project showcasing your end-to-end skills. <br />
          This is an industry-ready track for anyone looking to become a professional full-stack developer.<br />

        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default FSD;