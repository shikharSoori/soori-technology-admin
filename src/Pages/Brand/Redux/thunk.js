import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "./api";

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (values, { rejectWithValue }) => {
    const { brandName, description } = values;
    console.log(brandName, "sdfj");
    try {
      const body = { brandName, description };
      console.log(body, "sddddddddfj");

      const { data } = await API.addBrand(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
