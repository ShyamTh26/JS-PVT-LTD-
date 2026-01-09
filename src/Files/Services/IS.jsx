import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './cssss/Files.css';

const IS = () => {
  return (
    <>
      <Navbar />

      <div className="files-container">
        <h1 className="files-title">Interactive Sessions</h1>
        <hr className="files-divider" />
        <p className="files-description">
          Our Interactive Sessions are designed to foster active learning through live discussions, doubt-clearing, and peer collaboration. <br />
          Students engage with trainers in real-time, enhancing clarity and retention. <br />
          These sessions cover project walkthroughs, debugging challenges, and problem-solving tasks. <br />
          We encourage participation through quizzes, coding battles, and weekly feedback loops. <br />
          It's a great opportunity to learn how to present ideas, ask questions, and learn from peers. <br />
          These engaging experiences make learning more enjoyable and highly effective. <br />
          Regular reviews and Q&A sessions ensure all concepts are fully understood.<br />
        </p>
        <a href="/#services" className="files-link">Explore More Services</a>
      </div>

      <Footer />
    </>
  );
};

export default IS;