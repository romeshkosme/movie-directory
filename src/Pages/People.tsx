import React from "react";
import "../Assests/Styles/People.css"
import underConstruction from "../Assests/Static/underConstruction.svg"

function People() {
  return (
    <div className="people">
      <img src={underConstruction} alt="" width={"50%"} />
      <h1>Under Construction</h1>
    </div>
  );
}

export default People;
