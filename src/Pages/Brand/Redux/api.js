import axiosInstance from "../../../Utils/axios";

export const addBrand = (body) => axiosInstance.post(`product-app/brand`, body);

export const getAllBrand = (body) => axiosInstance.get(`product-app/brand`);
