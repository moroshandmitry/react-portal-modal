import { useState, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

export const Modal = ({ onToggleShowModal }) => {
  // input value
  const [inputVal, setInputVal] = useState("");
  // input value

  // Email validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [notValidChar, setNotValidChar] = useState("");
  // Email validation

  console.log("renders Modal");

  // input value + focus in tag <p>output value above</p>
  const inputRef = useRef();
  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  const handleInputValue = ({ target }) => {
    setInputVal(target.value);
  };
  // input value + focus in tag <p>output value above</p>

  // Email validation
  const handleInputEmail = (event) => {
    const NOT_VALID_CHARS_PATTERT = /[а-яА-Я`!#$%^&*()+=[\]{};':"\\|,<>/?~]/g;
    setNotValidChar(event.target.value.match(NOT_VALID_CHARS_PATTERT));

    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleBlurEmail = (event) => {
    const EMAIL_PATTERN = /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,3}$/g;
    const validation = EMAIL_PATTERN.test(String(event.target.value));
    validation ? setEmailError(false) : setEmailError(true);
  };
  // Email validation

  // Show Modal
  const handleShowModal = () => {
    onToggleShowModal();
    setInputVal("");
  };
  // Show Modal

  return (
    <div className="modal-back-drop">
      <div className="modal-body">
        <div className="modal-header">
          <h2 className="modal-header-heading" title="Modal title">
            Modal title
          </h2>
          <button
            className="modal-btn btn-danger"
            onClick={handleShowModal}
            title="Close"
          >
            &#x2715;
          </button>
        </div>
        <div className="modal-main">
          <h1 title="Attention please">Attention!!!</h1>
          <p className="modal-main-text" title="information">
            Very important information and some text here!
          </p>
          <p
            style={inputVal ? { display: "flex" } : { display: "none" }}
            className="modal-main--input-info"
          >
            {inputVal}
          </p>
          <div className="modal-main--input-block">
            <button
              className="modal-btn btn-primary modal-main-arrow"
              title="Focus on input"
              onClick={handleFocusInput}
            >
              Focus &#x2192;
            </button>
            <input
              ref={inputRef}
              className="modal-main-input"
              type="text"
              placeholder="Some text here..."
              onChange={handleInputValue}
            />
          </div>

          <input
            className={"modal-main-input--email" + (emailError ? "-err" : "")}
            onChange={handleInputEmail}
            onBlur={handleBlurEmail}
            value={email}
            type="email"
            name="email"
            placeholder="E-mail"
            title="Please provide e-mail address"
            autoComplete="off"
          />
          <div>
            {emailError ? (
              <div className="modal-main-error">Incorrect E-Mail Address</div>
            ) : notValidChar ? (
              <div className="modal-main-error">{`Please don't use russian letters or special symbols like this \`!#$%^&*()+=[]{};':"\\|,<>/?~`}</div>
            ) : (
              <div className="modal-main-success">example@gmail.com</div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <h2 className="modal-footer-heading" title="Footer and some text">
            Footer subscribe
          </h2>
          <button
            disabled={emailError || email === ""}
            className="modal-btn btn-primary"
            onClick={handleShowModal}
            title="Submit"
          >
            &#x2713;
          </button>
        </div>
      </div>
    </div>
  );
};

createPortal(<Modal />, document.getElementById("portal-root"));
