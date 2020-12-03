import React from "react";
import JoinSlack from "./JoinSlack";
import JoinDiscord from "./JoinDiscord";
import JoinMail from "./JoinMail";
import JoinTelegram from "./JoinTelegram";

function Join() {
  return (
    <>
      <div className="flex__row mb-5">
        <h3 style={{ marginLeft: "75px" }}>
          <p>
            Let's discuss{" "}
            <span style={{ color: "rgb(15, 157, 88)" }}>Stuffsssssss!</span>
          </p>
        </h3>
      </div>
      <div className="flex__row mb-1">
        <div className="row">
          <div className="col-md-6">
            <JoinSlack />
          </div>
          <div className="col-md-6">
            <JoinDiscord />
          </div>
        </div>
      </div>
      <div className="flex__row mb-5">
        <div className="row">
          <div className="col-md-6">
            <JoinTelegram />
          </div>
          <div className="col-md-6">
            <JoinMail />
          </div>
        </div>
      </div>
    </>
  );
}

export default Join;
