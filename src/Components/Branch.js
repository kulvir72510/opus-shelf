import React from "react";
import { Link } from "react-router-dom";
import Square from "./Square";
import Design from "./Design";
import Header from "./header";
import Footer from "./Footer";

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
              <Square brancCS="CS" />
            </Link>
            <Link to="/SubjectCSE">
              <Square brancIT="IT" />
            </Link>
            <Square brancECE="ECE" />
            <Square brancEE="EE" />
            <Square brancME="ME" />
            <Square brancCE="CE" />
            <Square brancCHE="CHE" />
            <Square brancMET="Metallurgy" />
          </div>
        </div>
        <Design current2="true" />
      </div>
      <Footer />
    </div>
  );
};

export default Branch;
