import axiosInstance from "../../../Utils/axios";

export const addBrand = (body) => axiosInstance.post(`product-app/brand`, body);
