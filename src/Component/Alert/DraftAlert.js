import "./Alert.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { errorFunction, successFunction } from "./Alert";
import { setShowDraftAlert } from "../../Redux/Alert/alertSlice";

const DraftAlert = ({ data, action, setShowModal }) => {
  const showDraftAlert = useSelector((state) => state.alert.showDraftAlert);
  const dispatch = useDispatch();
  const modalClass = showDraftAlert
    ? "modal draft-alert-modal display-block"
    : "modal draft-alert-modal display-none";

  const handleSave = async () => {
    await dispatch(action(data))
      .unwrap()
      .then(() => {
        successFunction("Saved in draft.");
        dispatch(setShowDraftAlert(false));
        setShowModal(false);
      })
      .catch((error) => errorFunction("Failed to save as draft."));
  };
  return (
    <div
      className={modalClass}
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Do you want to save as draft ?</h5>
          </div>
          <div className="buttons-container">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                dispatch(setShowDraftAlert(false));
                setShowModal(false);
              }}
            >
              NO
            </button>
            <button className="btn btn-secondary btn-sm" onClick={handleSave}>
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DraftAlert);
