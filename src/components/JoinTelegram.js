import React from "react";
import telegram from "../assets/img/telegram.svg";

function JoinTelegram() {
  return (
    <>
      <div className="telegram-card card">
        <h3 className="mb-3">Join us on Telegram</h3>
        <p className="mb-5">
          Stay updated, informed and caught up on all the upcoming events,
          hackathons, workshops etc alongwith a regular tinge of useful
          resources to aid your develper journey!
        </p>
        <a
          href="https://t.me/DSCJSSATEN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn btn-join">
            <img src={telegram} className="codesandbox" alt="icon" />
            <p>Telegram</p>
          </button>
        </a>
      </div>
    </>
  );
}

export default JoinTelegram;
