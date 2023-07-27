import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addBrand } from "./thunk";

const initialState = {
  brands: [],
  loading: false,
  brand: null,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBrand.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBrand.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addBrand.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default brandSlice.reducer;
