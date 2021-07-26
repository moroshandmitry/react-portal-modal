import { createPortal } from "react-dom";
import "./Modal.scss";

export const Modal = ({
  onShowModal,
  onFocusInput,
  onInputValue,
  inputRef,
  inputVal
}) =>
  createPortal(
    <div className="modal-back-drop">
      <div className="modal-body">
        <div className="modal-header">
          <h2 className="modal-header-heading" title="Modal title">
            Modal title
          </h2>
          <button
            className="modal-btn btn-danger"
            onClick={onShowModal}
            title="Close"
          >
            &#x2715;
          </button>
        </div>
        <div className="modal-main">
          <h1 title="Attention please">Attention!!!</h1>
          <p title="information">
            Very important information and some text here!
          </p>
          <p
            style={inputVal ? { display: "flex" } : { display: "none" }}
            className="modal-main--input-info"
          >
            {inputVal}
          </p>
          <button
            className="modal-btn btn-primary modal-main-arrow"
            title="Focus on input"
            onClick={onFocusInput}
          >
            Focus &#x2192;
          </button>
          <input
            ref={inputRef}
            className="modal-main-input"
            type="text"
            placeholder="Some text here..."
            onChange={onInputValue}
          />
        </div>
        <div className="modal-footer">
          <h2 className="modal-footer-heading" title="Footer and some text">
            Footer and some text
          </h2>
          <button
            className="modal-btn btn-primary"
            onClick={onShowModal}
            title="Submit"
          >
            &#x2713;
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
