import React from "react";
import TextField from "../../../Component/CommonTextField/TextField";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Textarea from "../../../Component/CommonTextArea/Textarea";
import SelectField from "../../../Component/CommonSelectField/Select";
import AsyncSelect from "../../../Component/CommonAsyncSelectField/AsyncSelect";
import Dropzone from "../../../Component/CommonDropzone/Dropzone";
import { useState } from "react";
import Thumb from "../../../Component/Thumb";
import { useDispatch } from "react-redux";
import { addBrand } from "../Redux/thunk";
import { useHistory } from "react-router-dom";
import { errorFunction, successFunction } from "../../../Component/Alert/Alert";

const AddBrand = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    brand: "",
    description: "",
    photo: null,
  };
  const validationSchema = Yup.object().shape({
    brand: Yup.string()
      .required("Required!")
      .min(3, "Brand Name must be at least 3 characters."),
    description: Yup.string()
      .required("Required!")
      .min(3, "Description must be at least 3 characters."),
  });
  const [photo, setPhoto] = useState(null);
  const [photo1, setPhoto1] = useState(null);

  const onSubmit = (values) => {
    dispatch(addBrand(values))
      .unwrap()
      .then(() => {
        successFunction("Brand Added Successfully");
        setShowModal(false);
      })
      .catch((error) => {
        errorFunction(error);
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form autoComplete="off" className="form-horizontal">
              {" "}
              <div className="row">
                <div className="col-3">
                  <Dropzone
                    name={"photo"}
                    label={"Photo"}
                    removePhoto={() => {
                      setPhoto(null);
                    }}
                    onChange={(event) => {
                      formik.setFieldValue("a", event.target.files[0]);
                      let reader = new FileReader();
                      reader.readAsDataURL(event.target.files[0]);
                      reader.onloadend = () => setPhoto([reader.result]);
                    }}
                    displayImage={<Thumb thumb={photo ? photo : "abc"} />}
                  />
                  <Dropzone
                    name={"photo1"}
                    label={"Photo 1"}
                    removePhoto={() => {
                      setPhoto1(null);
                    }}
                    onChange={(event) => {
                      formik.setFieldValue("a", event.target.files[0]);
                      let reader = new FileReader();
                      reader.readAsDataURL(event.target.files[0]);
                      reader.onloadend = () => setPhoto1([reader.result]);
                    }}
                    displayImage={<Thumb thumb={photo1 ? photo1 : "abc"} />}
                  />
                </div>

                <div className="col-9">
                  <TextField
                    type="text"
                    name="brand"
                    label="Brand Name"
                    placeholder="Brand Name"
                    className="login"
                    required
                    formikRequired={
                      formik?.errors?.brand && formik?.touched?.brand
                    }
                    onChange={(e) =>
                      formik.setFieldValue("brand", e.target.value)
                    }
                  />
                  {/* <div className="row">
                    <div className="col-6">
                      <AsyncSelect name="brand" label="Brand" isMulti={false} />
                    </div>
                    <div className="col-6">
                      <AsyncSelect
                        name="category"
                        label="Category"
                        isMulti={false}
                      />
                    </div>
                  </div> */}
                  <Textarea
                    name={"description"}
                    label="Product Description"
                    value={formik.values.description}
                    onChange={(e) => {
                      formik.setFieldValue("description", e.target.value);
                    }}
                    required={true}
                  />
                  {/* <TextField
                    type="text"
                    name="productName"
                    label="Download Boucher Link"
                    placeholder="Download Boucher Link"
                    className="login"
                    required
                    formikRequired={
                      formik?.errors?.productName &&
                      formik?.touched?.productName
                    }
                    onChange={(e) =>
                      formik.setFieldValue("productName", e.target.value)
                    }
                  /> */}
                  {/* <TextField
                    type="text"
                    name="supportLink"
                    label="Get Support Link"
                    placeholder="Support Link"
                    className="login"
                    required
                    formikRequired={
                      formik?.errors?.supportLink &&
                      formik?.touched?.supportLink
                    }
                    onChange={(e) =>
                      formik.setFieldValue("supportLink", e.target.value)
                    } 
                  />*/}

                  <div className="d-flex justify-content-center w-100">
                    <button type="submit" className="btn">
                      {"Create"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddBrand;
