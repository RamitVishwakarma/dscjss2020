import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
// import Member from "../assets/img/team/test.png";
import TeamData from "../assets/data/team.json";
import In from "../assets/img/in.svg";
import github from "../assets/img/github.svg";
import NavbarDefault from "./NavbarDefault";
import Footer from "./Footer";

function Team() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  return (
    <>
    <NavbarDefault />
      <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">Meet the Geeks</span>
          <span className="page__content">
            We're a team of
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
            who work independently towards learning, contributing and
            collaborating in unison.
          </span>
        </div>
        <Lottie
          options={defaultOptions}
          // height={700}
          width={700}
          // style={{ margin: "0px", maxWidth: "100%", padding: "60px" }}
        />
      </div>
      <div className="team__container">
        {TeamData.map((member, index) => (
          <div className="team__card" key={member.id}>
            <div className="member__img">
              <img src={member.image} alt="" className="display__img" />
              <div className="content__overlay">
                <div className="overlay__content" id="scrollb_style">
                  <span>{member.bio}</span>
                  <div className="member__social">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={In} alt="LinkedIn" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={github} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span className="member__name">{member.name}</span>
            <span className="member__designation">{member.role}</span>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
}

export default Team;
