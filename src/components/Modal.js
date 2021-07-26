import { createPortal } from "react-dom";
import "./Modal.scss";

export const Modal = ({ onShowModal }) =>
  createPortal(
    <div className="modal-back-drop">
      <div className="modal-body">
        <div className="modal-header">
          <h2 className="modal-header-heading">Modal title</h2>
          <button className="modal-header-btn btn-danger" onClick={onShowModal}>
            x
          </button>
        </div>
        <div className="modal-main">
          <h1>Attention!!!</h1>
          <p>Very important information here and some text!</p>
        </div>
        <div className="modal-footer">
          <h2 className="modal-footer-heading">Footer and some text</h2>
          <button
            className="modal-header-btn btn-primary"
            onClick={onShowModal}
          >
            Ok
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
