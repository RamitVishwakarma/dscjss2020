import React from "react";
import Lottie from "react-lottie";
import Anim from "../assets/animation/2.json";

function Programming() {
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
      <h4 style={{ marginBottom: "20px" }}>Programming</h4>
      <p style={{ color: "#4f4f4f" }}>
        We're a hub of coders and programmers who help solve coding problems,
        develop new skills, and develop your career path.
      </p>
    </>
  );
}

export default Programming;
