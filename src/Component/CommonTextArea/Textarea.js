import "./Textarea.css";
import React from "react";
import { ErrorMessage } from "formik";
import TextError from "../TextError/TextError";

const Textarea = ({ label, name, onChange, required, value }) => {
  return (
    <div className="common-textarea-wrapper">
      <label htmlFor={name} className="form-label float-start">
        {label}
        {required ? <strong className="text-danger ">*</strong> : ""}
      </label>
      <textarea
        type="text"
        name={name}
        onChange={onChange}
        className="form-control"
        placeholder="Enter remarks"
        value={value}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
