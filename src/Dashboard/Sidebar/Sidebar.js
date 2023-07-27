import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MetisMenu from "@metismenu/react";
import SimpleBar from "simplebar-react";
import Tippy from "@tippyjs/react";
import "./Sidebar.css";
import { data } from "./SidebarData";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import logo from "../../assets/cubix-logo.png";
import { MdOutlineLogout } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((state) => state.layout.toggleSidebar);
  const isSuperUser = useSelector((state) => state.auth.isSuperUser);
  const permissions = useSelector((state) => state.auth.permissions);

  return (
    <div className="vertical-menu m-0 mm-active">
      <SimpleBar className="h-100 mm-show ">
        <div className="sidebar-logo-container d-flex align-items-center justify-content-center">
          <div className="brand-logo d-flex justify-content-start ">
            {toggleSidebar ? (
              <Link to="/" className="small-logo">
                {/* <img src={smallarista} alt="arista" /> */}
              </Link>
            ) : (
              <Link to="/" className="logo pl-3">
                {/* <img src={arista} alt="arista" /> */}
              </Link>
            )}
          </div>
        </div>

        <div id="sidebar-menu" className="mm-active mt-4">
          <MetisMenu
            className="metismenu list-unstyled"
            id="side-menu"
            toggle={true}
          >
            {data?.map((side) => {
              const { name, link, icon, permission } = side;
              const showMenu = permissions?.some(
                (element) => permission?.indexOf(element) !== -1
              );

              if (isSuperUser ) {
                return (
                  <React.Fragment key={name}>
                    {toggleSidebar ? (
                      <Tippy content={name} placement="right">
                        <li>
                          <NavLink to={link}>
                            <i className="sidbar-icon">{icon}</i>
                          </NavLink>
                        </li>
                      </Tippy>
                    ) : (
                      <li>
                        <NavLink to={link}>
                          <i className="sidbar-icon">{icon}</i>
                          {name}
                        </NavLink>
                      </li>
                    )}
                  </React.Fragment>
                );
              }
            })}
          </MetisMenu>
        </div>

        <div id="" className="mm-active mb-4" onClick={() => {}}>
          <MetisMenu
            className="metismenu logout-wrapper list-unstyled"
            id="side-menu"
            toggle={true}
          >
            <MdOutlineLogout className="logout-logo" />
            <a>Logout</a>
          </MetisMenu>
        </div>
      </SimpleBar>
    </div>
  );
};

export default React.memo(Sidebar);
