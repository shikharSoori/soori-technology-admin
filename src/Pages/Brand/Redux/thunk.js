import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "./api";

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (values, { rejectWithValue }) => {
    const { brand, description } = values;
    console.log(brand, "sdfj");
    try {
      const body = { brand, description };
      const { data } = await API.addBrand(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllBrand = createAsyncThunk(
  "product-app/brand",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.getAllBrand();
      return data;
    } catch (error) {
      return rejectWithValue("Failed to getAllBrand");
    }
  }
);
