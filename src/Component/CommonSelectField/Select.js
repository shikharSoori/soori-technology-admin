import "./select.css";
import React, { lazy } from "react";
// import Select from "react-select";
import { ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
const Select = lazy(() => import("react-select"));
// const CurrencyListing = lazy(() => import("../../../Pages/Currency/Page"));
const SelectField = ({
  label,
  required,
  formikRequired,
  value,
  name,
  className,
  options,
  onChange,
  autoFocus,
  isNotFormik,
  isDisabled,
}) => {
  return (
    <div className="select-field-wrapper">
      <label htmlFor={label} className="form-label">
        {label} {required && <strong className="text-danger">*</strong>}
      </label>
      <Select
        value={value}
        isClearable="true"
        isSearchable="true"
        name={name}
        required
        className={
          formikRequired
            ? "required-field select-field " + className
            : "select-field " + className
        }
        getOptionLabel={(option) =>
          `${option.packingType ? option.packingType.name : option.name}`
        }
        getOptionValue={(option) => `${option.id}`}
        options={options}
        onChange={onChange}
        autoFocus={autoFocus}
        isDisabled={isDisabled ? true : false}
      />
      {!isNotFormik && <ErrorMessage name={name} component={TextError} />}
    </div>
  );
};

export default SelectField;
