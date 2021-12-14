import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Design from "./Design";
import Square from "./Square";
import { Link } from "react-router-dom";


const SubjectCSE = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <h2>Subjects</h2>
          <hr></hr>
          <div className="flex-container2">

            <Square SubjectCS="DAA" />
            <Square SubjectCS="DSA" />
            <Square SubjectCS="CD" />
            <Square SubjectCS="Auto" />
            <Square SubjectCS="DBMS" />
            <Square SubjectCS="TOA" />
            <Square SubjectCS="SOFTCOM" />
            <Square SubjectCS="MINI" />
          </div>
        </div>
        <Design current2="true" />
      </div>
      <Footer />
    </div>
  );
};

export default SubjectCSE;
