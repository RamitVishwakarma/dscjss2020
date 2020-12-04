import React from "react";
import Development from "./Development";
import Programming from "./Programming";
import Design from "./Design";

function Clubs() {
  return (
    <>
      <div className="flex__row">
        <h2 style={{ marginLeft: "50px" }} className="club-headline">
          <p>
            What we <span style={{ color: "#F4B400" }}>Dooooooo!</span>
          </p>
        </h2>
      </div>
      <div className="row mb-5">
        <div className="col-md-3 col-sm-6 ml-5 mr-5 mb-5">
          <Development />
        </div>
        <div className="col-md-3 col-sm-6 ml-5 mr-5 mb-5">
          <Programming />
        </div>
        <div className="col-md-3 col-sm-6 ml-5 mr-5 mb-5">
          <Design />
        </div>
      </div>
    </>
  );
}

export default Clubs;
