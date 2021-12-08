import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";

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
        <div class="div-2">
          <div class="content1">
            <a class=" links" href="#">
              Your Class
            </a>
            <br />
            <a class=" links" href="http://localhost:3000/publicclass">
              Public Class
            </a>
            <br />
            <a class=" links" href="#">
              Make new Classroom Class
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
