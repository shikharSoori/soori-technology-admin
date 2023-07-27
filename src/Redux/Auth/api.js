import axiosInstance from "../../Utils/axios";
import { publicAxiosInstance } from "../../Utils/axios";

//for login
export const login = (body) => publicAxiosInstance.post(`user-app/login`, body);
//for logout
export const logout = (body) =>
  publicAxiosInstance.post(`api/v1/auth-app/logout`, body);

export const checkToken = (body) =>
  publicAxiosInstance.post(`api/v1/auth-app/claims`, body);
