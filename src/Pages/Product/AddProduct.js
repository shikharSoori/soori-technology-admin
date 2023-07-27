import React from "react";
import TextField from "../../Component/CommonTextField/TextField";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Textarea from "../../Component/CommonTextArea/Textarea";
import SelectField from "../../Component/CommonSelectField/Select";
import AsyncSelect from "../../Component/CommonAsyncSelectField/AsyncSelect";
import Dropzone from "../../Component/CommonDropzone/Dropzone";
import { useState } from "react";
import Thumb from "../../Component/Thumb";

const AddProduct = () => {
  const initialValues = {
    productName: "",
  };
  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("Required!")
      .min(3, "Product Name must be at least 3 characters.")
      .matches(
        /(?=.*^[A-Za-z_]\w).*$/,
        "Username should begin with _ or alphabet."
      ),
  });
  const [photo, setPhoto] = useState(null);
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => {
          return (
            <Form autoComplete="off" className="form-horizontal">
              <div className="row">
                <div className="col-3">
                  <Dropzone
                    name={"photo"}
                    label={"Photo"}
                    removePhoto={() => {
                      setPhoto(null);
                    }}
                    onChange={(event) => {
                      formik.setFieldValue("avatar", event.target.files[0]);
                      let reader = new FileReader();
                      reader.readAsDataURL(event.target.files[0]);
                      reader.onloadend = () => setPhoto([reader.result]);
                    }}
                    displayImage={<Thumb thumb={photo ? photo : ""} />}
                  />
                  <Dropzone name={"photo1"} label={"Photo 1"} />
                  <Dropzone name={"photo2"} label={"Photo 2"} />
                </div>
                <div className="col-9">
                  <TextField
                    type="text"
                    name="productName"
                    label="Product Name"
                    placeholder="Product Name"
                    className="login"
                    required
                    formikRequired={
                      formik?.errors?.productName &&
                      formik?.touched?.productName
                    }
                    onChange={(e) =>
                      formik.setFieldValue("productName", e.target.value)
                    }
                  />
                  <div className="row">
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
                  </div>
                  <Textarea
                    name={"productDescription"}
                    label="Product Description"
                    value={formik.values.remarks}
                    onChange={(e) => {
                      formik.setFieldValue("remarks", e.target.value);
                    }}
                    required={true}
                  />
                  <TextField
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
                  />
                  <TextField
                    type="text"
                    name="productName"
                    label="Get Support Link"
                    placeholder="Product Name"
                    className="login"
                    required
                    formikRequired={
                      formik?.errors?.productName &&
                      formik?.touched?.productName
                    }
                    onChange={(e) =>
                      formik.setFieldValue("productName", e.target.value)
                    }
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddProduct;
