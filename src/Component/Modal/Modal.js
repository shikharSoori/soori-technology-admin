import "./Modal.css";
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({
  children,
  showModal,
  setShowModal,
  header,
  types,
  size,
  id,
  edit,
  clearAction,
  draftData,
  title,
}) => {
  const modalClass = showModal ? "modal display-block" : "modal display-none";
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    };
    ref.current.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div
        className={modalClass}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        id={id}
      >
        <div
          className={`modal-dialog modal-dialog-centered ${size ? size : ""}`}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myExtraLargeModalLabel">
                {header}
              </h5>
              <button
                onClick={(e) => handleClose()}
                type="button"
                className="btn-close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body" ref={ref}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
