import React from "react";
import slack from "../assets/img/slack.svg";

function JoinSlack() {
  return (
    <>
      <div className="slack-card card">
        <h3 className="mb-3">Join our Workspace on Slack</h3>
        <p className="mb-5">
          Stay on the same page, be focused and organised to learn more quickly
          by bringing all of communication, resources, and event updates into
          one place.
        </p>
        <a
          href="https://join.slack.com/t/dscjssnoida/shared_invite/zt-jhpjeyjq-BlqVx7IsMny0L38blmY7Og"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn btn-join">
            <img src={slack} className="codesandbox" alt="icon" />
            <p>Slack</p>
          </button>
        </a>
      </div>
    </>
  );
}

export default JoinSlack;
