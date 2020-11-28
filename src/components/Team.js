import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import Member from "../assets/img/test.png";
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
          style={{ margin: "0px" }}
        />
      </div>
      <div className="team__container">
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
        <div className="team__card">
          <div className="member__img">
            <img src={Member} alt="" className="display__img" />
            <div className="content__overlay">
              <div className="overlay__content">
                <span>Hello,</span>
                <span>
                  Our masters of Programming are graduates of IITs and have
                  previously worked at Top-Tech Companies. Our strength comes
                  from their passion towards teaching.
                </span>
                <div className="member__social">
                  <a href="/">
                    <img src={In} alt="LinkedIn" />
                  </a>
                  <a href="/">
                    <img src={Fb} alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span className="member__name">Vivekanand Vivek</span>
          <span className="member__designation">Lead</span>
        </div>
      </div>
    </>
  );
}

export default Team;
