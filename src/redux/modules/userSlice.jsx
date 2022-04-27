import { createSlice } from "@reduxjs/toolkit";
import instance, { userApi } from "../../shared/api";

const initialState = {
  isLogin: false,
  user: {
    email: "",
    username: "",
    avatarImage: "",
    isAvatarImageSet: false,
    _id: "",
  },
};

export const signUpDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/auth/register", userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response);
      });
  };
};

export const loginDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    instance.post("/api/auth/login", userInfo).then((res) => {
      console.log("로그인 성공", res);
      // dispatch(setUser(res.data));
    });
  };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isLogin = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice;
