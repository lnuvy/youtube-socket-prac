import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import ToastReducer from "./modules/ToastMesage";

// 리듀서 router 안에 history 넣기
const rootReducer = combineReducers({
  toastMessage: ToastReducer,
});

// 개발 환경일때, redux-logger 사용하기
const env = process.env.NODE_ENV;

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: env !== "production",
});

export default store;
