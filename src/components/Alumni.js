import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import AlumniData from "../assets/data/alumni.json";
import In from "../assets/img/in.svg";
import github from "../assets/img/github.svg";

function Alumni() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  return (
    <>
      <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">Our Alumni</span>
          <span className="page__content">
            Meet our amazing alumni who've set the standards high, showcasing their talents and rising high in the real world. We are proud to follow their footsteps.
          </span>
        </div>
        <Lottie
          options={defaultOptions}
          width={700}
        />
      </div>
      <div className="team__container">
        {AlumniData.map((member, index) => (
          <div className="team__card" key={member.id}>
            <div className="member__img">
              <img src={member.image} alt="" className="display__img" />
              <div className="content__overlay">
                <div className="overlay__content">
                  {/* <span>{member.bio}</span> */}
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
          </div>
        ))}
      </div>
    </>
  );
}

export default Alumni;
