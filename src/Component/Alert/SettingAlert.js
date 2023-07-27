import "./Alert.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSettingAlert } from "../../Redux/Auth/authSlice";
import { logout } from "../../Redux/Auth/thunk";
import getCookie from "../../Utils/Cookies/getCookie";
import { errorFunction, successFunction } from "./Alert";

const SettingAlert = () => {
  const settingAlert = useSelector((state) => state.auth.settingAlert);
  const dispatch = useDispatch();
  const modalClass = settingAlert
    ? "modal alert-modal display-block"
    : "modal alert-modal display-none";

  const handleLogout = () => {
    const token = getCookie("refreshToken");
    if (token) {
      dispatch(logout(token))
        .unwrap()
        .then(() => {
          successFunction("Logged out successfully.");
          dispatch(setSettingAlert(false));
        })
        .catch((error) => {
          errorFunction("Failed to logout.");
        });
    }
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
            <h5>Alert for Setup</h5>
          </div>
          <p>As this is your first time, please set up the settings page.</p>
          <div className="buttons-container">
            <Link to="/" onClick={() => dispatch(setSettingAlert(false))}>
              OK
            </Link>
            <button onClick={handleLogout} className="btn btn-secondary btn-sm">
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingAlert;
