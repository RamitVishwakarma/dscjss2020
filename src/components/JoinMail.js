import React from "react";
import gmail from "../assets/img/gmail.svg";

function JoinMail() {
  return (
    <>
      <div className="mail-card card">
        <h3 className="mb-3">Subscribe our newsletter</h3>
        <p className="mb-5">
          Access to a global network of student leaders, professional community
          organizers, industry experts, and Googlers to gain mentorship and
          share knowledge.
        </p>
        <a href="https://dsc.community.dev/jss-academy-of-technical-education-noida/">
          <button type="button" className="btn btn-join">
            <img src={gmail} className="codesandbox" alt="icon" />
            <p>Subscribe</p>
          </button>
        </a>
      </div>
    </>
  );
}

export default JoinMail;
