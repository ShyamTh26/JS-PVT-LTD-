import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const ProjectD = () => {

  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Project Development</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Our Project Development program is tailored to guide you through the entire lifecycle of a real-world project. <br />
          You will gain practical experience in requirement analysis, database design, backend logic, and frontend integration. <br />
          We follow Agile methodology and use modern tools such as Git, JIRA, Spring Boot, and React. <br />
          You’ll learn how to structure a scalable project, handle deployments, and maintain code quality. <br />
          We provide access to mentorship from experienced developers to help you at each step. <br />
          By the end, you will have a complete deployable project ready for your portfolio. <br />
          This hands-on approach builds confidence and job-readiness for the industry.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default ProjectD;