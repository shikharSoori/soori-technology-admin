import "./index.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { login } from "../../Redux/Auth/thunk";
// import { resetSuccess } from "../../Redux/Auth/authSlice";
import Button from "../../Component/Button/Button";
import TextField from "../../Component/CommonTextField/TextField";
import { successFunction, errorFunction } from "../../Component/Alert/Alert";
import arista from "../../assets/arista.png";
import sooriSolutions from "../../assets/sooriSolutions.png";
import gif from "./../../assets/Fingerprint.gif";
const Login = () => {
  // props
  const loadingLogin = useSelector((state) => state.auth.loadingLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const [type, setType] = useState("password");
  //initial values of form field in formik
  const remember = localStorage.getItem("rememberMe");
  const user = localStorage.getItem("userName");
  const initialValues = {
    userName: user ? user : "",
    password: "",
    rememberMe: remember === "true" ? true : false,
  };
  const message = useSelector((state) => state.auth.message);

  // useEffect(() => {
  //   message?.status === true && dispatch(resetSuccess([]));
  // }, [dispatch]);
  //validation rule for the form field in formik
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Required!")
      .min(3, "Username must be at least 3 characters.")
      .matches(
        /(?=.*^[A-Za-z_]\w).*$/,
        "Username should begin with _ or alphabet."
      ),
    password: Yup.string()
      .required("Required!")
      .min(4, "Password should be at least 4 characters."),
    rememberMe: Yup.bool(),
  });
  //submit handler for formik
  const onSubmit = (values) => {
    const { rememberMe, userName, password } = values;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("userName", rememberMe ? userName : "");
    const credentials = { userName, password };
    dispatch(login(credentials))
      .unwrap()
      .then(() => {
        successFunction(`Welcome ${userName}`);
        history.replace("/");
      })
      .catch(() => {
        errorFunction("Failed to login.");
      });
  };
  // toggle password
  const handleClick = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <>
      <div className="container login-page-wrapper mb-2 d-flex justify-content-center">
          <div className="login-form-container d-flex flex-column justify-content-center align-items-center">
            {/* <div className="logo-container">
              <img src={arista} alt="arista" />
            </div> */}
            <div className="login-message">
              <p className="p-0">
                {/* Login to{" "}
                <span>
                  ARI<span className="arista-s">S</span>TA
                </span>{" "}
                account */}
                Login to Continue...
              </p>
            </div>
            <div className="form-wrapper">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form autoComplete="off" className="form-horizontal ">
                      <div className="mb-2">
                        <div style={{ position: "relative" }}>
                          <TextField
                            type="text"
                            name="userName"
                            label="UserName"
                            placeholder="@arista"
                            className="login"
                            required
                            formikRequired={
                              formik?.errors?.userName &&
                              formik?.touched?.userName
                            }
                            onChange={(e) =>
                              formik.setFieldValue("userName", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="mb-2 password-field">
                        <div style={{ position: "relative" }}>
                          <TextField
                            type={type}
                            name="password"
                            label="Password"
                            placeholder="****"
                            className="login"
                            required
                            formikRequired={
                              formik?.errors?.password &&
                              formik?.touched?.password
                            }
                            onChange={(e) =>
                              formik.setFieldValue("password", e.target.value)
                            }
                          />
                          <span className="fa-eye-button" onClick={handleClick}>
                            {type === "password" ? (
                              <BsFillEyeSlashFill />
                            ) : (
                              <BsFillEyeFill />
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          name="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mt-1 mb-1 text-center d-flex justify-content-center">
                        <button
                          type={"submit"}
                          className={
                            "btn login-button justify-content-center align-items-center d-flex"
                          }
                          disabled={loadingLogin}
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-center mt-1">
                        <Link
                          to="/reset-password"
                          className="text-decoration-none"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="p-0 mb-3 ">Developed & Maintained By</p>
        <img src={sooriSolutions} alt="soori-solutions" />
      </div>
    </>
  );
};

export default Login;
