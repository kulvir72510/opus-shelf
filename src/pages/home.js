import React from "react";
import { Props } from "react-modal";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import Design from "../Components/Design";

const Home = (Props) => {
  return (
    <div>
      <Header />
      <div class="wraper">
        <div class="div-1">
          <Props.component/>
        </div>
        <Design />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
