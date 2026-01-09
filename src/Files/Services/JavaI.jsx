import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const JavaI = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Java Internship</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Our Java Internship is designed to provide strong foundational and advanced knowledge of Java development. <br />
          You will work on Java-based web applications using JDBC, Servlets, JSP, and Spring Boot. <br />
          Through structured assignments and team projects, you’ll gain practical experience in OOPs, exception handling,
          multithreading, and real-time integration with databases.<br />
          Weekly assessments and feedback sessions ensure your consistent growth. <br />
          Interns also get exposure to RESTful API creation and deployment on cloud platforms. <br />
          This internship is perfect for students aiming to start a backend development career.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default JavaI;