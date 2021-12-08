import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";

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
        <div class="div-2">
          <div class="content1">
            <a class=" links" href="http://localhost:3000">
              Home
            </a>
            <br />
            <a class=" links" href="#">
              Public Class
            </a>
            <br />
            <a class=" links" href="#">
              Your Class
            </a>
            <br />
            <a class=" links" href="#">
              Make New Class
            </a>
            <br />
            <a class=" links" href="#">
              Setting
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PublicClass;
