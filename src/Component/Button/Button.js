import "./Button.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsPlusCircleFill, BsFilter } from "react-icons/bs";
import Select from "react-select";
import DateRangePicker from "react-bootstrap-daterangepicker";

const Button = ({
  types,
  btnType,
  className,
  disabled,
  title,
  onClick,
  createButton,
  filterButton,
  loading,
}) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center filter-element-wrapper"></div>
      <div className="button-container">
        <button
          onClick={onClick}
          type={btnType}
          className={`${className} `}
          disabled={disabled || loading}
        >
          {createButton && <BsPlusCircleFill />}
          {filterButton && <BsFilter />}
          {title}
        </button>
      </div>
    </>
  );
};
export default Button;
