import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import Member from "../assets/img/team/test.png";
import TeamData from "../assets/data/team.json";
import In from "../assets/img/in.svg";
import Fb from "../assets/img/fb.svg";

function Team() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  return (
    <>
      <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">Meet the Geeks</span>
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
        </div>
        <Lottie
          options={defaultOptions}
          height={700}
          width={700}
          style={{ margin: "0px", maxWidth: "100%" }}
        />
      </div>
      <div className="team__container">
        {TeamData.map((member, index) => (
          <div className="team__card">
            <div className="member__img">
              <img src={Member} alt="" className="display__img" />
              <div className="content__overlay">
                <div className="overlay__content">
                  <span>
                    {member.bio}
                  </span>
                  <div className="member__social">
                    <a href={member.linkedin}>
                      <img src={In} alt="LinkedIn" />
                    </a>
                    <a href={member.github}>
                      <img src={Fb} alt="Facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span className="member__name">{member.name}</span>
            <span className="member__designation">{member.role}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
