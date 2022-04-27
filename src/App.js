import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";
import { history } from "./redux/configureStore";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/register" exact element={Register} />
        <Route path="/login" exact element={Login} />
        <Route path="/setAvatar" exact element={SetAvatar} />
        <Route path="/" exact element={Chat} />
      </ConnectedRouter>
    </>
  );
}

export default App;
