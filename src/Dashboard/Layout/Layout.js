import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

const Layout = ({ children, loading = false }) => {
  const toggleSidebar = useSelector((state) => state.layout.toggleSidebar);
  const toggle = toggleSidebar ? "sidebar-enable vertical-collapsed" : "";
  return (
    <>
      <div id="layout-wrapper" className={toggle}>
        <Header />
        <Sidebar />
        <div className={"main-content"}>
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
