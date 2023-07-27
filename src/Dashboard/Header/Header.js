import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { BiBell, BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { toggleSidebarData } from "../../Redux/Layout/layoutSlice";
// import { socketNotification } from "../../Redux/Notification/notificationSlice";
// import image from "../../assets/prof1.png";
// import {
//   getNotification,
//   getNotificationCount,
// } from "../../Redux/Notification/thunk";
// import Stomp from "stompjs";
// import SockJs from "sockjs-client";
import getCookie from "../../Utils/Cookies/getCookie";
// import Notification from "./Notification";
// import NotificationSound from "../../assets/notification.wav";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((state) => state.layout.toggleSidebar);
  const { img, userId } = useSelector((state) => state.auth);

  const dropdownMenuRef = useRef(null);
  const handleMenuClick = (event) => {
    event.stopPropagation(); // Prevent closing the dropdown
  };

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-sm sidebar-toggle-button"
            id="vertical-menu-btn"
            onClick={() => dispatch(toggleSidebarData(!toggleSidebar))}
          >
            {toggleSidebar ? <BiMenuAltLeft /> : <BiMenu />}
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn header-item noti-icon waves-effect "
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="d-flex align-items-center">
              <BiBell />
            </i>
            {/* {unreadNotification > 0 && (
              <span className="badge bg-danger rounded-pill">
                {unreadNotification > 9 ? "9+" : unreadNotification}
              </span>
            )} */}
          </button>
          <div
            className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown"
            ref={dropdownMenuRef}
            onClick={handleMenuClick}
          >
            {/* <Notification /> */}
            {/* <ul className="list-group">
              <li className="list-group-item">Notification 1</li>
              <li className="list-group-item">Notification 2</li>
              <li className="list-group-item">Notification 3</li>
            </ul> */}
          </div>
          <Link to="/profile">
            <img
              className="rounded-circle header-profile-user ml-2"
              // src={img ? img : image}
              src=""
              alt="Avatar"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
