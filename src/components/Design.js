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
      <h4 style={{ marginBottom: "20px" }}>Designing</h4>
      <p style={{ color: "#4f4f4f" }}>
        Our aim is to learn and teach. Developers, Designers and Programmers
        come together under one roof to create a community which inspires
        thousands.
      </p>
    </>
  );
}

export default Design;
