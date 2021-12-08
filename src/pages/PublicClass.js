import React from "react";
import Design from "../Components/Design";
import Footer from "../Components/Footer";
import Header from "../Components/header";

function PublicClass() {
  return (
    <div>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <div class="content">
            <h2>Public Classes</h2>
          </div>
        </div>

        <Design></Design>
      </div>
      <Footer />
    </div>
  );
}

export default PublicClass;
