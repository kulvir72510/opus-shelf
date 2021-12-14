import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./pages/home";
import HomeDiv from "./Components/HomeDiv";
import PublicClass from "./pages/PublicClass";
import YourClass from "./pages/YourClass";
import NewClass from "./pages/NewClass";
import Branch from "./Components/Branch";
import SubjectCSE from "./Components/SubjectCSE";
import SubjectIT from "./Components/SubjectIT";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home  component={HomeDiv}/>} />
        <Route path="/publicclass" element={<Home component={PublicClass}/>} />
        <Route path="/yourclass" element={<Home component={YourClass}/>} />
        <Route path="/newclass" element={<Home component={NewClass}/>} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/subjectCSE" element={<SubjectCSE />} />
        <Route path="/subjectIT" element={<SubjectIT />} />
      </Routes>
    </div>
  );
};

export default App;
