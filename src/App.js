import { useState } from "react";

import { Modal } from "./components/Modal";

import "./styles.scss";

export const App = () => {
  const [showModal, setShowModal] = useState(true);

  const handleToggleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      {!showModal ? (
        <h1 style={{ color: "#065ab4" }}>Trying a modal portal!</h1>
      ) : (
        <h2 style={{ color: "#065ab4" }}>Excelent!</h2>
      )}

      {showModal ? (
        <Modal onToggleShowModal={handleToggleShowModal} />
      ) : (
        <button
          className="btn btn-primary"
          onClick={handleToggleShowModal}
          type="button"
        >
          {!showModal && "Show"} modal
        </button>
      )}
    </div>
  );
};
