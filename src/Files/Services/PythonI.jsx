import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';


const PythonI = () => {

  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Python Internship</h1>
        <hr className="files-divider" />
        <p className="files-description">

          This internship offers in-depth training in Python programming, covering both core and advanced topics. <br />
          You’ll work on real-world tasks involving data processing, web development with Django/Flask, and automation. <br />
          We focus on logical thinking, problem-solving, and clean coding practices. <br />
          You will also learn about API creation, file handling, error management, and database integration. <br />
          Assignments and collaborative mini-projects ensure hands-on exposure. <br />
          Our trainers help you explore Python’s role in data science, web, and scripting. <br />
          This program is ideal for students and beginners looking to build Python development careers.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default PythonI;

