import React from "react";
import "./topNav.css";
// Import images
import git from "./assets/git.png";
import linkedin from "./assets/linkedin.png";
import gmail from "./assets/gmail.png";
import wp from "./assets/wp.png";

const TopNavBar = () => {
  return (
    <div className="top-nav">
      <button className="download-cv-button">Download CV</button>
      <div className="social-icons-row">
        <button className="social-icon-button">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="social-icon"
            width={"47.866px"}
          />
        </button>
        <button className="social-icon-button">
          <img
            src={git}
            alt="GitHub"
            className="social-icon"
            width={"47.866px"}
          />
        </button>
        <button className="social-icon-button">
          <img
            src={gmail}
            alt="Gmail"
            className="social-icon"
            width={"47.866px"}
          />
        </button>
        <button className="social-icon-button">
          <img
            src={wp}
            alt="WhatsApp"
            className="social-icon"
            width={"47.866px"}
          />
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
