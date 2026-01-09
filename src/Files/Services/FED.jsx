import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const FED = () => {

  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Frontend Development</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Master the art of designing responsive and interactive user interfaces with our Frontend Development course. <br />
          Learn HTML5, CSS3, JavaScript ES6+, and modern frameworks like React.js. <br />
          Understand how to build reusable components, manage application state, and optimize for performance. <br />
          You will also explore advanced topics like animations, form validation, API integration, and accessibility. <br />
          The curriculum includes hands-on projects and challenges to build your portfolio. <br />
          You’ll be guided through best UI/UX practices and Figma-to-code implementation. <br />
          This track is ideal for aspiring frontend developers who want to bring modern designs to life.<br />
          <br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default FED;
