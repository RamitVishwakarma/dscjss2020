import React from "react";
import Lottie from "react-lottie";
import Anim from "../assets/animation/3.json";

function Design() {
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
        Designing
      </h4>
      <p style={{ color: "#4f4f4f" }} className="mobile-para">
        We're a vibrant community for anyone who cares for design. We share
        stories, uncover insights, surface opportunities in Design.
      </p>
    </>
  );
}

export default Design;
