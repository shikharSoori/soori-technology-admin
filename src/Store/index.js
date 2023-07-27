import { combineReducers } from "@reduxjs/toolkit";
import layoutReducer from "../Redux/Layout/layoutSlice";
import authReducer from "../Redux/Auth/authSlice";
const rootReducer = combineReducers({
  layout: layoutReducer,
  auth: authReducer,
});

export default rootReducer;
