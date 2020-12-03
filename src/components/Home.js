import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import { Link } from "react-router-dom";
import codesandbox from "../assets/img/codesandbox.svg";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  return (
    <>
      <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">DSC JSS NOIDA</span>
          <span className="page__content">
            Our aim is to learn and teach.
            <span style={{ color: "#0F9D58", fontWeight: "bolder" }}>
              {" "}
              Developers
            </span>
            ,
            <span style={{ color: "#DB4437", fontWeight: "bolder" }}>
              {" "}
              Designers
            </span>{" "}
            and
            <span style={{ color: "#4285F4", fontWeight: "bolder" }}>
              {" "}
              Programmers{" "}
            </span>
            come together under one roof to create a community which inspires
            thousands
          </span>
          <Link to="/">
            <button type="button" className="btn btn-primary join-us-btn">
              <img src={codesandbox} className="codesandbox" alt="icon" />
              <p>Join Us</p>
            </button>
          </Link>
        </div>
        <Lottie
          options={defaultOptions}
          height={700}
          width={700}
          style={{ margin: "0px", maxWidth: "100%", padding: "60px" }}
        />
      </div>
    </>
  );
}

export default Home;
