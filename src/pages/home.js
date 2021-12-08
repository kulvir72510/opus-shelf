import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import Design from "../Components/Design";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <div class="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            consectetur harum, velit exercitationem expedita illum numquam et a?
            Rem est esse quas nulla saepe quis blanditiis vitae sed laboriosam
            quasi?
          </div>
        </div>
        <Design></Design>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
