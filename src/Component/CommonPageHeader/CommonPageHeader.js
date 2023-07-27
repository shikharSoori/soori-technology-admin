import "./CommonPageHeader.css";
import React, { useCallback, lazy, useState } from "react";
// import { BiSearch } from "react-icons/bi";
import { errorFunction } from "../Alert/Alert";
import Button from "../Button/Button";
import { BiSearch } from "react-icons/bi";

const CommonPageHeader = ({ title, search, subTitle, setShowModal }) => {

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="header-content d-flex align-items-center justify-content-between flex-row">
          <div className="d-flex align-items-left justify-content-around flex-column title-container">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="sub-title">
              <p>Manage your {subTitle}</p>
            </div>
          </div>
          <div className="search-wrapper">
            <div className="input-group">
              <input
                type="text"
                value={search}
                // onChange={(e) => setSearch(e.target.value.trimStart())}
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <BiSearch />
                </span>
              </div>
            </div>
          </div>

          <div className="button-wrapper">
            <button
              onClick={handleClick}
              type="button"
              className="btn create-button"
              title={"Create"}
              content={`Create ${title}`}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPageHeader;
