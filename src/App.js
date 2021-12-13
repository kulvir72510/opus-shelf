import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./pages/home";
import PublicClass from "./pages/PublicClass";
import YourClass from "./pages/YourClass";
import Branch from "./Components/Branch";
import SubjectCSE from "./Components/SubjectCSE";
import SubjectIT from "./Components/SubjectIT";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/publicclass" element={<PublicClass />} />
        <Route path="/yourclass" element={<YourClass />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/subjectCSE" element={<SubjectCSE />} />
        <Route path="/subjectIT" element={<SubjectIT />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
