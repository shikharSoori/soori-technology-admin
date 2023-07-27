import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./api";

export const login = createAsyncThunk(
  "user-app/login",
  async (credentials, { rejectWithValue }) => {
    const { userName, password } = credentials;
    try {
      const body = JSON.stringify({ userName, password });
      const { data } = await API.login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (token, { rejectWithValue }) => {
    try {
      const body = JSON.stringify({ refresh: token });
      await API.logout(body);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async (id, { rejectWithValue }) => {
    try {
      const body = JSON.stringify({ id });
      const { data } = await API.checkToken(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
