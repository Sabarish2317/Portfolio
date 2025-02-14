import React from "react";
import "./hero.css";
import heroPic from "./assets/hpic.svg";
const HeroSection = (props) => {
  return (
    <div className="hero-container">
      <div className="img">
        <img src={heroPic} alt="pic"></img>
      </div>

      <div className="hero-text-container">
        <div className="hero-text">
          <h1>
            A full stack App & Web developer<br></br>based in Tamil Nadu, India
          </h1>
          <p>Crafting Scalable Web & Mobile Solutions | A design Enthusiast</p>
        </div>
        <div className="buttons-row">
          <button className="contact-buttton">Contact me</button>
          <button className="learn-buttton">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
