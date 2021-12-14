import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import img from "../images/opss.png";
import img1 from "../images/joker.jpg";
function Header() {
  const [showing, setShowing] = useState(true);
  const showList = () => {
    if (showing) {
      setShowing(false);
      // console.log("yes");
    } else {
      setShowing(true);
      // console.log("no");
    }
    if (showing) {
      // console.log("hey");

      document
        .getElementById("clickMainProfileList")
        .classList.add("showContent");
    } else {
      document
        .getElementById("clickMainProfileList")
        .classList.remove("showContent");
    }
  };

  return (
        <div class="top">
          <img src={img} alt="" style={{ width: "24vw", height: "19vh" }} />
          {/* <img src={img1} alt="" className="profile-image" /> */}
          <div class="dropdown">
            <img
              src={img1}
              id="clickMainProfile"
              alt=""
              className="profile-image"
              onClick={showList}
            />
            {/* <button class="dropbtn">Dropdown</button> */}
            <div id="clickMainProfileList" class="dropdown-content">
              <Link to="/yourClass">Dashboard</Link>
              <Link to="/setting">Profile</Link>
              <hr></hr>
              <a href="#">LogOut</a>
            </div>
          </div>
        </div>
  );
}

export default memo(Header);
