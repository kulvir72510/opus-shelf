import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Modal from "./Components/Modal";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./pages/home";
import PublicClass from "./pages/PublicClass";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/modal" element={<Modal />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicclass" element={<PublicClass />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
