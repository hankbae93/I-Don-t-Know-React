import ReactDOM from "react-dom";

const Modal = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector("#modal"));

export default Modal;
