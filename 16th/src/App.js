import React, { useState } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Modal Window</h2>
        <p>This modal is rendered using React Portal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Portal Example</h2>
      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center"
};

export default App;
