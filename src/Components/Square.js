import React from "react";
import { Link } from "react-router-dom";
import img from "../images/opss.png";

const Square = (props) => {
  return (
    <div className="square">
      <img
        src={img}
        alt=""
        style={{
          width: "10vw",
          height: "15vh",
          border: "2px solid black",
          cursor: "pointer",
        }}
      />
      <Link className="linking" to="/branch">
        {props.year1}
      </Link>
      <Link className="linking" to="/branch">
        {props.year2}
      </Link>
      <Link className="linking" to="/branch">
        {props.year3}
      </Link>
      <Link className="linking" to="/branch">
        {props.year4}
      </Link>
      {/* <Link className="linking" to="/subjectCSE">
        {props.brancCS}
      </Link>
      <Link className="linking" to="/subjectIT">
        {props.brancIT}
      </Link>
      <Link className="linking" to="/subjectECE">
        {props.brancECE}
      </Link>
      <Link className="linking" to="/subjectEE">
        {props.brancEE}
      </Link>
      <Link className="linking" to="/subjectME">
        {props.brancME}
      </Link>
      <Link className="linking" to="/subjectCE">
        {props.brancCE}
      </Link>
      <Link className="linking" to="/subjectCHE">
        {props.brancCHE}
      </Link>
      <Link className="linking" to="/subjectMET">
        {props.brancMET}
      </Link> */}
    </div>
  );
};

export default Square;
