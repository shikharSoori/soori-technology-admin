import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import deleteCookie from "../../Utils/Cookies/deleteCookie";
import setCookie from "../../Utils/Cookies/setCookie";
import { login } from "./thunk";

const initialState = {
  isAuthenticated: false,
  permissions: [],
  authError: false,
  isSuperUser: false,
  userName: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authError: (state) => {
      storage.removeItem("persist:root");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      state.isAuthenticated = false;
      state.loading = false;
      state.userName = null;
      state.authError = true;
      state.isSuperUser = false;
      state.permissions = [];
    },
    logout: (state) => {
      storage.removeItem("persist:root");
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      state.isAuthenticated = false;
      state.userName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      storage.removeItem("persist:root");

      setCookie("accessToken", action.payload.tokens?.access, {
        "max-age": 36000000,
      });
      setCookie("refreshToken", action.payload.tokens.refresh, {
        // secure:false,
        "max-age": 36000000,
      });
      state.isAuthenticated = true;
      state.loading = false;
      state.authError = false;
      state.isSuperUser = true;
      state.userName = action.payload.userName;
      state.permissions = action.payload.permissions;
    });
    builder.addCase(login.rejected, (state) => {
      state.login = false;
    });
  },
});

export const { authError, logout } = authSlice.actions;

export default authSlice.reducer;
