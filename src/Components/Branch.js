import React from "react";
import { Link } from "react-router-dom";
import Square from "./Square";
import Design from "./Design";
import Header from "./header";
import Footer from "./Footer";
import car from "../images/car.jpg"

const Branch = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <h2>Branches</h2>
          <hr></hr>
          <div className="flex-container2">
            <Link to="/SubjectCSE">
              <Square brancCS="CS" imageLink={car}  />
            </Link>
            <Link to="/SubjectCSE">
              <Square brancIT="IT" />
            </Link>
            <Link to="/SubjectCSE">
            <Square brancECE="ECE" />
            </Link>
            <Link to="/SubjectCSE">

            <Square brancEE="EE" />
            </Link>
            <Link to="/SubjectCSE">

            <Square brancME="ME" />
            </Link>
            <Link to="/SubjectCSE">
            <Square brancCE="CE" />

            </Link>
            <Link to="/SubjectCSE">

            <Square brancCHE="CHE" />
            </Link>
            <Link to="/SubjectCSE">

            <Square brancMET="Metallurgy" />
            </Link>
          </div>
        </div>
        <Design current2="true" />
      </div>
      <Footer />
    </div>
  );
};

export default Branch;
