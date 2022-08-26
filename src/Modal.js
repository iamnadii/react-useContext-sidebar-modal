import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal content</h3>
        <div className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </div>
      </div>
    </div>
  );
};

export default Modal;
