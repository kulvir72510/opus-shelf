import React from "react";
import Design from "../Components/Design";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import Square from "../Components/Square";
import { Link } from "react-router-dom";
import car from "../images/car.jpg"
import joker from "../images/joker.jpg"
import pp from "../images/opss.png"

function PublicClass() {
  return (
    <div style={{ height: "100vh" }}>
        <div class="div-1">
          <h2>Public Classes</h2>
          <hr></hr>
          <div className="flex-container2">
            <Link className="linking" to="/branch">
              <Square year1="1" imageLink={car} />
            </Link>
            <Link className="linking" to="/branch">
              <Square year2="2" imageLink={joker} />
            </Link>
            <Link className="linking" to="/branch">
              <Square year3="3" imageLink={pp} />
            </Link>
            <Link className="linking" to="/branch">
              <Square year4="4" imageLink={car} />
            </Link>
          </div>
        </div>
        <Design current2="true" />
    </div>
  );
}

export default PublicClass;
