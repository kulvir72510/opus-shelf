import React from "react";
import { Route, Link } from "react-router-dom";

const Design = () => {
  return (
    <div className="div-2">
      <div className="content1">
        <Link className="links" to="/home">
          Home
        </Link>
        <br />
        <Link className=" links" to="/publicclass">
          Public Class
        </Link>
        <br />
        <Link className=" links" to="/yourclass">
          Your Class
        </Link>
        <br />
        <Link className=" links" to="#">
          Make New Class
        </Link>
        <br />
        <Link className=" links" to="#">
          Setting
        </Link>
      </div>
    </div>
  );
};

export default Design;
