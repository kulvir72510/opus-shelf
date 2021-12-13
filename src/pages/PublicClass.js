import React from "react";
import Design from "../Components/Design";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import Square from "../Components/Square";
import { Link } from "react-router-dom";

function PublicClass() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <h2>Public Classes</h2>
          <hr></hr>
          <div className="flex-container2">
            <Link className="linking" to="/branch">
              <Square year1="1" />
            </Link>
            <Link className="linking" to="/branch">
              <Square year2="2" />
            </Link>
            <Link className="linking" to="/branch">
              <Square year3="3" />
            </Link>
            <Link className="linking" to="/branch">
              <Square year4="4" />
            </Link>
          </div>
        </div>
        <Design current2="true" />
      </div>
      <Footer />
    </div>
  );
}

export default PublicClass;
