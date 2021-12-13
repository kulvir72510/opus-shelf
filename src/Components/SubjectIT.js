import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Design from "./Design";
import Square from "./Square";

const SubjectIT = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <h2>Subjects</h2>
          <hr></hr>
          <div className="flex-container2">
            <Square SubjectIT="DAA" />
            <Square SubjectIT="DSA" />
            <Square SubjectIT="CD" />
            <Square SubjectIT="Auto" />
            <Square SubjectIT="DBMS" />
            <Square SubjectIT="TOA" />
            <Square SubjectIT="SOFTCOM" />
            <Square SubjectIT="MINI" />
          </div>
        </div>
        <Design current2="true" />
      </div>
      <Footer />
    </div>
  );
};

export default SubjectIT;
