import { useState } from "react";

import { useRef } from "react";
import { Modal } from "./components/Modal";

import "./styles.scss";

export const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [inputVal, setInputVal] = useState("");

  const inputRef = useRef();
  const handleInputValue = ({ target }) => setInputVal(target.value);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
    setInputVal("");
  };

  return (
    <div className="App">
      {!showModal ? (
        <h1 style={{ color: "#af2b38" }}>Trying a modal portal!</h1>
      ) : (
        <h2 style={{ color: "#065ab4" }}>Excelent!</h2>
      )}

      {showModal ? (
        <Modal
          onShowModal={handleShowModal}
          onFocusInput={handleFocusInput}
          inputRef={inputRef}
          onInputValue={handleInputValue}
          inputVal={inputVal}
        />
      ) : (
        <button className="btn btn-primary" onClick={handleShowModal}>
          {!showModal && "Show"} modal
        </button>
      )}
    </div>
  );
};
