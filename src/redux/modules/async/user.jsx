import { createAsyncThunk } from "@reduxjs/toolkit";
import { history } from "../../configureStore";
import { userApi } from "../../../shared/api";

export const signupUserDB = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await userApi.signup(data);
      if (response.data.ok) {
        return true;
      }
    } catch (err) {
      alert("async user쪽", err);
    }
  }
);
