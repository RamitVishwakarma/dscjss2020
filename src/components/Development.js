import React from "react";
import Lottie from "react-lottie";
import Anim from "../assets/animation/1.json";

function Development() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Anim,
  };
  return (
    <>
      <div className="lottie">
        <Lottie
          options={defaultOptions}
          height={150}
          width={150}
          style={{
            margin: "0px",
            maxWidth: "100%",
            paddingRight: "60px",
            align: "left",
          }}
        />
      </div>
      <h4
        style={{ marginBottom: "20px", marginTop: "20px" }}
        className="mobile-para"
      >
        Development
      </h4>
      <p style={{ color: "#4f4f4f" }} className="mobile-para">
        We're a community to help web developers by providing them helpful
        resources and giving an experience of open source contribution.
      </p>
    </>
  );
}

export default Development;
