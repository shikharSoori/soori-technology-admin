import "./AsyncSelect.css";
import React, { lazy } from "react";
import { ErrorMessage } from "formik";
import TextError from "../TextError/TextError";

const AsyncPaginate = lazy(() =>
  import("react-select-async-paginate").then((module) => ({
    default: module.AsyncPaginate,
  }))
);

const AsyncSelect = ({
  parent,
  name,
  label,
  required,
  formikRequired,
  isNotFormik,
  value,
  onChange,
  loadOptions,
  className,
  getOptionLabel,
  getOptionValue,
  additional,
  autoFocus,
  disabled,
  isMulti,
}) => {
  return (
    <div className="common-async-select-wrapper">
      {label ? (
        <label htmlFor={name} className="form-label">
          {label} {required && <strong className="text-danger">*</strong>}
        </label>
      ) : (
        ""
      )}

      <AsyncPaginate
        key={parent ? parent : ""}
        value={value}
        isClearable="true"
        isSearchable="true"
        name={name}
        isMulti={isMulti}
        className={
          formikRequired
            ? "required-field async-select-field " + className
            : "async-select-field " + className
        }
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        onChange={onChange}
        loadOptions={loadOptions}
        additional={additional}
        autoFocus={autoFocus}
        isDisabled={disabled}
      />
      {!isNotFormik && <ErrorMessage name={name} component={TextError} />}
    </div>
  );
};

export default AsyncSelect;
