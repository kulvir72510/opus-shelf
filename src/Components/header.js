import React from "react";
import img from "../images/opss.png";
function Header() {
  return (
    <div>
      <div class="top">
        <img src={img} alt="" style={{ width: "24vw", height: "19vh" }} />
      </div>
    </div>
  );
}

export default Header;
