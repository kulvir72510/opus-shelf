import React from "react";
import Header from "../Components/header";
import Square from "../Components/Square";
import Footer from "../Components/Footer";
import Design from "../Components/Design";

const YourClass = () => {
  return (
    <div>
          <div class="div-1">
            <h2>Your Classes</h2>
            <div className="hrTag">
              <hr />
            </div>
            <div className="flex-container2">
              <Square year="1" />
              <Square year="2" />
              <Square year="3" />
              <Square year="4" />
            </div>
            <h2>Shared Classes</h2>
            <div className="hrTag">
              <hr />
            </div>
            <div className="flex-container2">
              <Square year="1" />
              <Square year="2" />
              <Square year="3" />
              <Square year="4" />
            </div>
          </div>
        </div>
  );
};

export default YourClass;
