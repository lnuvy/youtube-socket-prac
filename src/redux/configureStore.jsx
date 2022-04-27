import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

// 리듀서 router 안에 history 넣기
const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

console.log(store);

export default store;
