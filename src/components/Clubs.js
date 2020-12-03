import React from "react";
import Development from "./Development";
import Programming from "./Programming";
import Design from "./Design";

function Clubs() {
  return (
    <>
      <div className="flex__row">
        <h3 style={{ marginLeft: "75px" }}>
          <p>
            What we <span style={{ color: "#F4B400" }}>Dooooooo!</span>
          </p>
        </h3>
      </div>
      <div className="row ml-3 mr-3 mb-5">
        <div className="col ml-5 mb-5">
          <Development />
        </div>
        <div className="col ml-5 mb-5">
          <Programming />
        </div>
        <div className="col ml-5 mb-5">
          <Design />
        </div>
      </div>
    </>
  );
}

export default Clubs;
