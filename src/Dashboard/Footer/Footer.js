import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const day = date.getDay();
  return (
    <>
      <footer className="footer">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="col-6">
              {date.toLocaleDateString("fr-CA")}{" "}
              {day === 0
                ? "Sunday"
                : day === 1
                ? "Monday"
                : day === 2
                ? "Tuesday"
                : day === 3
                ? "Wednesday"
                : day === 4
                ? "Thursday"
                : day === 5
                ? "Friday"
                : "Saturday"}
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <div className="">
                  Powered by: Soori Solutions © {date.getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
