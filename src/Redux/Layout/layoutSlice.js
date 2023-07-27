import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSidebar: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebarData: (state, action) => {
      state.toggleSidebar = action.payload;
    },
  },
});

export const { toggleSidebarData } = layoutSlice.actions;
export default layoutSlice.reducer;
