import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./modules/userSlice";

export const history = createBrowserHistory();

// 리듀서 router 안에 history 넣기
const rootReducer = combineReducers({
  user: userSlice,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

// 개발 환경일때, redux-logger 사용하기
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
