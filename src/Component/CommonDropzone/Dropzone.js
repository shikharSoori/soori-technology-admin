import "./Dropzone.css";
import React from "react";
import { ErrorMessage } from "formik";
import { FaTrashAlt } from "react-icons/fa";
import TextError from "../TextError/TextError";
import { useState } from "react";
// import image from "../../assets/Vector.png";

const Dropzone = ({
  name,
  label,
  onChange,
  removePhoto,
  displayImage,
  isNotFormik,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy"; // This is to show a "copy" cursor when dragging over the dropzone.
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    // Get the dropped file
    const file = e.dataTransfer.files[0];

    // Call the onChange handler to handle the dropped file
    if (file) {
      onChange({ target: { name, files: [file] } });
    }
  };

  let deleteButtonClass = displayImage ? "delete-button show" : "delete-button";
  const handleClick = () => {
    removePhoto();
  };

  return (
    <div
      className={`common-dropzone-wrapper ${dragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label className="form-label">{label}</label>
      <br />
      <label
        className="custom-dropzone"
        htmlFor={name}
        onClick={() => (document.getElementById(`${name}`).value = null)}
      >
        {displayImage !== "" ? (
          displayImage
        ) : (
          <>
            {/* <img src={image} alt="image-logo" /> */}
            <p>Select {label}</p>
          </>
        )}
      </label>
      <div className={deleteButtonClass} onClick={handleClick}>
        <FaTrashAlt />
      </div>
      <input
        type="file"
        id={name}
        name={name}
        className="form-control"
        onChange={onChange}
      />
      {!isNotFormik && <ErrorMessage name={name} component={TextError} />}
    </div>
  );
};

export default Dropzone;
