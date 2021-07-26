import { useState } from "react";

import { Modal } from "./components/Modal";

import "./styles.scss";

export const App = () => {
  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      {!showModal ? <h1>Trying a modal portal!</h1> : <h2>Excelent</h2>}

      {showModal ? (
        <Modal onShowModal={handleShowModal} />
      ) : (
        <button className="btn btn-primary" onClick={handleShowModal}>
          {!showModal && "Show"} modal
        </button>
      )}
    </div>
  );
};
