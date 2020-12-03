import React from "react";
import discord from "../assets/img/discord.svg";

function JoinDiscord() {
  return (
    <>
      <div className="discord-card card">
        <h3 className="mb-3">Join us on Discord</h3>
        <p className="mb-5">
          Ready to hang out? Grab a seat in a voice channel. Designed so you can
          pop in and out of voice and video conversations throughout the day.
        </p>
        <a href="https://discord.com/invite/EBgD52V2hM">
          <button type="button" className="btn btn-join">
            <img src={discord} className="codesandbox" alt="icon" />
            <p>Discord</p>
          </button>
        </a>
      </div>
    </>
  );
}

export default JoinDiscord;
