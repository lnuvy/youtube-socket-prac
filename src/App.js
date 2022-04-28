import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToastMessage from "./components/ToastMessage";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
      <ToastMessage />
    </BrowserRouter>
  );
}

export default App;
