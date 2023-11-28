import React from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
// import Zealicon from "../assets/img/projects/ZealiconApp.svg";
// import DSCFolios from "../assets/img/projects/DSCFolios.svg";
// import Evento from "../assets/img/projects/Evento.svg";
// import FossEvents from "../assets/img/projects/FossEvents.svg";
// import LineUp from "../assets/img/projects/Lineup.svg";
// import PlasmaDonor from "../assets/img/projects/PlasmaDonor.svg";
// import Snappify from "../assets/img/projects/Snappify.svg";
// import UdhariApp from "../assets/img/projects/UdhariApp.svg";
// import UdhariApp1 from "../assets/img/projects/UdhariApp1.svg";
import mongo from "../assets/img/tech/Mongo.svg";
import node from "../assets/img/tech/node.svg";
import php from "../assets/img/tech/PHP.svg";
import react from "../assets/img/tech/react.svg";
import bootstrap from "../assets/img/tech/Bootstrap.svg";
import firebase from "../assets/img/tech/firebase.svg";
import kotlin from "../assets/img/tech/Kotlin.svg";
import java from "../assets/img/tech/Java.svg";
// import android from "../assets/img/tech/android.svg";
// import css from "../assets/img/tech/css.svg";
// import figma from "../assets/img/tech/figma.svg";
// import html from "../assets/img/tech/html.svg";
// import javascript from "../assets/img/tech/Javascript.svg";
// import laravel from "../assets/img/tech/Laravel.svg";
import NavbarDefault from "./NavbarDefault";
import Footer from "./Footer";

function Projects() {
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
          <span className="page__heading">Stuff we make</span>
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
        <Lottie options={defaultOptions} width={700} />
      </div>
      <div className="container col-md-9  col-sm-10">
        {/* Zealicon App */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-3"
              style={{
                backgroundColor: "#F0C630",
              }}
            >
              <img
                src="https://i.ibb.co/RbSCG8C/Zealicon-app.png"
                alt="zealicon"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Zealicon App 2020</h3>
              <p className="mb-2">
                The official android app of the annual fest of JSSATEN, Zealicon
                2020. The theme of the fest is "Music". Explore all events
                day-wise as well as category-wise. Get all the upcoming events
                at one place. Set reminder to your favourite events.{" "}
              </p>
              <div className="mb-3">
                <img src={kotlin} alt="android" />
                <img src={firebase} alt="firebase" />
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/Zealicon"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn mt-3"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Zealicon App */}
        {/* DSC Folios */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#DB4437",
              }}
            >
              <img
                src="https://i.ibb.co/f88774c/Dsc-Folios.png"
                alt="DSC Folios"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">GDSC Folios</h3>
              <p className="mb-2">
                GDSC Folios helps you generate an awesome, easy to share digital
                portfolios by just filling out some simple details. Showcase
                yourself and your achievements with a professional and
                impressive resume with effortlessness and awesome craftsmanship.
                Saves time and effort, so that developers land their dream job
                within a few clicks!{" "}
              </p>
              <div className="mb-3">
                <img src={react} alt="react" />
                <img src={bootstrap} alt="bootstrap" />
                <img src={php} alt="php" />
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/DSC-Folios"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn mt-3"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* DSC Folios */}
        {/* Plasma Donor */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#4285F4",
              }}
            >
              <img
                src="https://i.ibb.co/gWxLVXB/Plasma-Doner.png"
                alt="Plasma Donor"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Plasma Donor App</h3>
              <p className="mb-2">
                An open-source Android app that helps in connecting patients and
                plasma donors. This is a beginner-friendly repository that helps
                you learn the basics of android development, git, and GitHub for
                GDSC HackFest 2020.{" "}
              </p>
              <div className="mb-3">
                <img src={kotlin} alt="kotlin" />
                <img src={firebase} alt="firebase" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/Plasma-Donor-App"
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn mt-3"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Plasma Donor */}
        {/* Evento */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#0F9D58",
              }}
            >
              <img
                src="https://i.ibb.co/jwHKDR4/Evento.png"
                alt="Evento"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Evento</h3>
              <p className="mb-2">
                All events at one place one stop for all events and workshops
                organized by various college societies. The members from
                different societies and clubs can upload info about the upcoming
                workshops or events.{" "}
              </p>
              <div className="mb-3">
                <img src={kotlin} alt="kotlin" />
                <img src={firebase} alt="firebase" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/tronku/Evento"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Evento */}
        {/* LineUp */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#F4B400",
              }}
            >
              <img
                src="https://i.ibb.co/94ZqF3P/Line-up.png"
                alt="Line Up"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Line Up</h3>
              <p className="mb-2">
                It is a game where one has to find his team members in college
                during the Zealicon using GPS. It is an interactive game played
                by a lot of students.{" "}
              </p>
              <div className="mb-3">
                <img src={java} alt="java" />
                <img src={firebase} alt="firebase" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/Line-up"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* LineUp */}
        {/* Udhaari */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#0F9D58",
              }}
            >
              <img
                src="https://i.ibb.co/jD9D8Zm/Udhari-app.png"
                alt="Udhaari"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Udhaari</h3>
              <p className="mb-2">
                It helps to maintain transaction records between Vendors and
                Customers and minimizes the loss of data which customer is
                vending how much money and when did he return that to the shop
                owner.{" "}
              </p>
              <div className="mb-3">
                <img src={java} alt="java" />
                <img src={firebase} alt="firebase" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/Udhaari"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Udhaari */}
        {/* sudoku */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#4285F4",
              }}
            >
              <img
                src="https://i.ibb.co/kJC4HBb/Udhari-app-1.png"
                alt="Sudoku"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Sudoku</h3>
              <p className="mb-2">
                {" "}
                Just fill the board, hit the button, and get your solution!
                Backtracking implementation of an android app that would allow
                users to play the game as well as solve sudoku.{" "}
              </p>
              <div className="mb-3">
                <img src={kotlin} alt="kotlin" />
                <img src={firebase} alt="firebase" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/Sudoku"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Sudoku */}
        {/* FossEvents */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#0F9D58",
              }}
            >
              <img
                src="https://i.ibb.co/Kw2PWtP/Foss-Events.png"
                alt="Foss Events"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Foss Events</h3>
              <p className="mb-2">
                It's a single platform with all the info that you need to stay
                updated with summits, meetups, hackathons, and much more! It is
                a beginner-friendly repository that helps you learn git and
                contribute to web projects under GDSC HackFest 2020.{" "}
              </p>
              <div className="mb-3">
                <img src={mongo} alt="mongo" />
                <img src={node} alt="node" />
              </div>
              <a
                href="https://github.com/DSC-JSS-NOIDA/foss-events"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* FossEvents */}
        {/* Snappify */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#F4B400",
              }}
            >
              <img
                src="https://i.ibb.co/JH0d7mN/Snappify.png"
                alt="Snappify"
                style={{
                  height: "370px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Snappify</h3>
              <p className="mb-2">
                Snappify is a smart post generator that helps you create posts
                for all social media profiles including Instagram, Facebook,
                LinkedIn, and Twitter within a snap. Don’t waste time coming up
                with creative ideas or messing with apps.{" "}
              </p>
              <div className="mb-3">
                <img src={react} alt="React" />
                <img src={bootstrap} alt="bootstrap" />
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://github.com/naman360/post-generator"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Snappify */}
        {/* GDSC_Recruitment_Platform */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#DB4437",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/KLPYYz6/recruitment.png"
                alt="GDSC Recruitment Platform"
                style={{
                  height: "330px",
                  marginBottom: "-75px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">GDSC Recruitment Platform</h3>
              <p className="mb-2">
                GDSC Recruitment Platform is an intelligent solution designed to streamline and
                simplify the recruitment process. With GDSC Recruitment Platform,
                students can register and apply for recruitment test.{" "}
              </p>
              <div className="mb-3">
                <img src={react} alt="React" />
                {/* <img src={bootstrap} alt="bootstrap" /> */}
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://gdscjss.in/projects"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* GDSC_Recruitment_Platform */}
        {/* Hola */}
        <div className="project__card mb-5">
          <div className="row">
            <div
              className="project__image col-md-5 col-sm-5"
              style={{
                backgroundColor: "#4285F4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://i.ibb.co/bFtrTkV/hola.png"
                alt="Hola"
                style={{
                  height: "330px",
                  marginBottom: "-175px",
                }}
              />
            </div>
            <div className="project__content col-md-7 p-5 col-sm-7">
              <h3 className="mb-3">Hola</h3>
              <p className="mb-2">
                Hola is a dynamic platform that bridges the gap between students and alumni.
                It's the perfect place for students to seek valuable guidance and assistance from their experienced peers.
                With Hola, students can tap into the wisdom of alumni, benefiting from their insights and expertise.
                Whether you're looking for career advice, mentorship, or simply a connection with those who have walked
                the same path, Hola provides the link between past and present, ensuring a brighter future for all.{" "}
              </p>
              <div className="mb-3">
                <img src={react} alt="React" />
                {/* <img src={bootstrap} alt="bootstrap" /> */}
                {/* <img src={figma} alt="figma" /> */}
              </div>
              <a
                href="https://gdscjss.in/projects"
                className="view-btn mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        {/* Hola */}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
