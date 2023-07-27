import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessage: "",
  showDraftAlert: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.alertMessage = action.payload;
    },
    hideAlert: (state) => {
      state.alertMessage = "";
    },
    setShowDraftAlert: (state, action) => {
      state.showDraftAlert = action.payload;
    },
  },
});

export const { showAlert, hideAlert, setShowDraftAlert } = alertSlice.actions;

export default alertSlice.reducer;
