import ReactDOM from "react-dom";
import "./css/Services.css";

const Modal = ({ onClose, title, description }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing on content click
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
