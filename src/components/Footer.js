import React from "react";
import Logo from "../assets/img/footer/logo.svg";
import instagram from "../assets/img/footer/1.svg";
import twitter from "../assets/img/footer/2.svg";
import medium from "../assets/img/footer/3.svg";
import youtube from "../assets/img/footer/4.svg";
import linkedin from "../assets/img/footer/5.svg";
import github from "../assets/img/footer/6.svg";
import "../footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div style={{ display: "block", margin: "auto" }}>
          <img src={Logo} alt="dscjss" />
        </div>
        <div className="icon-tray">
          <a
            href="https://www.linkedin.com/company/dsc-jssaten/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/dscjssaten/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://twitter.com/dscjssaten?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://medium.com/dsc-jss-noida"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="medium" />
          </a>
          <a
            href="https://github.com/DSC-JSS-NOIDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCkELk5JFDceaSf8pBa19kDQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2021 DSC JSSATEN</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
