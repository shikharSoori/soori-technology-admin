import axios from "axios";
import deleteCookie from "./Cookies/deleteCookie";
import setCookie from "./Cookies/setCookie";
import getCookie from "./Cookies/getCookie";
import { store } from "../Store/store";
import { errorFunction } from "../Component/Alert/Alert";
import { authError } from "../Redux/Auth/authSlice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: getCookie("accessToken")
        ? `Bearer ${getCookie("accessToken")}`
        : "",
    };
    config.baseURL = process.env.REACT_APP_BASE_URL;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    //refresh token
    const originalRequest = error.config;
    //when refresh token is also not valid

    if (
      error.response.status === 401 &&
      originalRequest.url === `api/v1/user-app/refresh`
    ) {
      deleteCookie("accessToken");
      return errorFunction(`Refresh Token Expired. Please Login.`);
    }
    //accessing new access token from refresh token
    else if (
      error.response?.data.message === "Token Expired" &&
      !originalRequest._retry
    ) {
      //call for refresh token

      originalRequest._retry = true;
      try {
        const body = JSON.stringify({
          refresh: getCookie("refreshToken"),
        });
        deleteCookie("accessToken");
        const response = await axiosInstance.post(
          `api/v1/user-app/refresh`,
          body
        );
        if (response.status === 200) {
          setCookie("accessToken", response?.data.access);
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${response?.data.access}`;
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        store.dispatch(authError());
      }
    }

    //server down
    else if (error.message === "Network Error") {
      errorFunction("Internal Server Error. Contact IT manager !!!");
    } else if (error.response?.status === 500) {
      errorFunction("Internal Server Error. Contact IT manager !!!");
    } else if (error.response?.status === 403) {
      errorFunction("Permission Denied. Contact IT manager !!!");
    } else if (error.response?.status === 404) {
      errorFunction("Page Not Found !!!!!");
    } else if (!error?.request?.withCredentials) {
      store.dispatch(authError());
    } else if (
      error.response?.status === 401 ||
      error.message === "Invalid token specified"
    ) {
      store.dispatch(authError());
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
