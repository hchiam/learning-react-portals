import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children, element = "div" }) {
  const [container] = useState(() => {
    return document.createElement(element);
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  // return ReactDOM.createPortal(children, container);
  return (
    <div
      id="modal"
      className="modal"
      onClick={() =>
        alert(
          "bubbled up to Modal.js because it's a child in the React tree (code)"
        )
      }
    >
      {ReactDOM.createPortal(children, container)}
    </div>
  );
}

export default Modal;
