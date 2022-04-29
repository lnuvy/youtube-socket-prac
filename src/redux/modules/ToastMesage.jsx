import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Message: false,
  text: "",
};

const toast = createSlice({
  name: "toastMessage",
  initialState,
  reducers: {
    fetchMessage: (state, action) => {
      state.Message = action.payload.Message;
      state.text = action.payload.text;
    },
  },
});

const { reducer, actions } = toast;
export const { fetchMessage, setUser } = actions;
export default reducer;
