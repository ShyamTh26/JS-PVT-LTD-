import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const ProjectM = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Project Management</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Learn how to lead and manage technical projects effectively with our Project Management program. <br />
          You’ll explore Agile, Scrum, and Waterfall methodologies and how to apply them in real scenarios. <br />
          Topics include task planning, team coordination, sprint planning, and progress tracking with tools like Trello and JIRA. <br />
          You’ll also understand risk assessment, client communication, and project delivery protocols. <br />
          The training prepares you to take ownership of full-cycle project execution. <br />
          This module is perfect for those aiming for tech lead or managerial roles in software teams.
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>
      <Footer />
    </>
  );
};

export default ProjectM;
