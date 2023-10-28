import React from "react";
import { useEffect } from "react";
import Lottie from "react-lottie";
import TeamAnim from "../assets/animation/TeamAnim.json";
import NavbarDefault from "./NavbarDefault";
import Footer from "./Footer";
function Events() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TeamAnim,
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.instagram.com/static/bundles/es6/EmbedSDK.js/363a6c0267bf.js";
    script.async = true;
    document.body.appendChild(script);
    if (window.instgrm) window.instgrm.Embeds.process();
  }, []);
  return (
    <>
    <NavbarDefault />
      {/* <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">Events we align</span>
          <p style={{ fontSize: "18px" }}>
            We organize amazing events including talks on a wide range of
            technical topics where you can learn new skills through hands-on
            workshops. We take pride on nurturing an inclusive environment where
            everyone and anyone interested in tech!
          </p>
        </div>
      </div> */}
      <div className="flex__row">
        <div className="page__headline">
          <span className="page__heading">Events we align</span>
          <span className="page__content">
            {" "}
            We organize amazing events on a wide range of technical topics where
            you can learn new skills through hands-on workshops and take pride
            on nurturing an inclusive environment for everyone and anyone
            interested in tech!
          </span>
        </div>
        <Lottie
          options={defaultOptions}
          // height={700}
          width={700}
          // style={{ margin: "0px", maxWidth: "100%", padding: "60px" }}
        />
      </div>
      <div className="container-fluid mb-5 ml-auto p-3">
        <div className="row">

          {/* 2022-23 */}

        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CyI8oakRtLc/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                
                data-instgrm-permalink="https://www.instagram.com/p/CyDZR6mNEC2/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CxzKKRSR5yS/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CreIIzzypGB/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CrbyFH3yowU/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CosADBBvTSd/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CoeeieQPpGN/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/Cl39zPzvy1k/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/ClJiBNLvA5y/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CjKpBzMPYPo/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CdZsKIoPUQe/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CZJuMP0PSVG/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CW7gta4PnYu/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CWnKciuv0eA/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CUk8Srxt2XG/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>

          {/* 2020 */}
          

          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CIkne8UHOrB/?utm_source=ig_web_copy_link?utm_source=ig_web_copy_link?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CJL67jCniJr/?utm_source=ig_web_copy_link?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CIsrvmgHGbY/?utm_source=ig_web_copy_link?utm_source=ig_web_copy_link?utm_source=ig_web_copy_link?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CIQts2CnUb3/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CH-v2q0nIBP/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CFuV88lnnKw/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                crossOrigin="anonymous"
                data-instgrm-permalink="https://www.instagram.com/p/CFpRz4Bn0K3/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/CBdzkr5HXqg/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                crossOrigin="anonymous"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="project-box">
              <blockquote
                className="instagram-media"
                crossOrigin="anonymous"
                data-instgrm-permalink="https://www.instagram.com/p/B8nZpg2nkOV/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="13"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "3px",
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "99.375%",
                }}
              ></blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
