import { useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal: React.FC<{ handleExit: () => void }> = (props) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const modalDiv = document.getElementById("modal");
  const handleBackgroundClicked = (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(e.target)
    if (e.target === divRef.current) {
      props.handleExit();
    }
  };
  if (modalDiv) {
    return ReactDOM.createPortal(
      <div ref={divRef} onClick={handleBackgroundClicked} className={classes.modal}>
        {props.children}
      </div>,
      modalDiv
    );
  } else {
    return <div></div>;
  }
};
export default Modal;
