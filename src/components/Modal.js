import { useState, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

export const Modal = ({ onToggleShowModal }) => {
  // input value
  const [inputVal, setInputVal] = useState("");
  // input value

  // Email validation
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(true);
  const [emailError, setEmailError] = useState("Email can't be empty");
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
  const REGULAR_EMAIL_PATTERN = /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,3}$/g;
  const handleBlurEmail = ({ target }) => {
    if (target.name) setEmailDirty(true);
    else setEmail("");
  };

  const handleInputEmail = ({ target }) => {
    setEmail(target.value);
    if (!REGULAR_EMAIL_PATTERN.test(String(target.value).toLowerCase())) {
      setEmailError("Incorrect E-Mail Address");
    } else setEmailError("");
  };
  // Email validation

  // Show Modal
  const handleShowModal = (e) => {
    onToggleShowModal();
    setInputVal("");

    if (!REGULAR_EMAIL_PATTERN.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect E-Mail Address");
      setEmailDirty(true);
      setEmail("");
    }
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
            className={
              "modal-main-input--email" +
              (emailError && emailDirty ? "-err" : "")
            }
            // className={`${
            //   emailError && emailDirty
            //     ? "modal-main-input--email-err"
            //     : "modal-main-input--email"
            // }`}
            onChange={handleInputEmail}
            onBlur={handleBlurEmail}
            value={email}
            type="email"
            name="email"
            placeholder="E-mail"
            title="Please provide e-mail address"
            autoComplete="off"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red", fontWeight: 700 }}>{emailError}</div>
          )}
        </div>
        <div className="modal-footer">
          <h2 className="modal-footer-heading" title="Footer and some text">
            Footer subscribe
          </h2>
          <button
            disabled={emailDirty && emailError}
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
