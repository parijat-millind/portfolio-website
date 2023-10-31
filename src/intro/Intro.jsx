import React from "react";
import "./Intro.css";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Hackerrank from "../img/hackerrank.png";
import Resume from './resume.pdf';
import Photo from "../img/dp1.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="ileft">
        <div className="iname">
          <span>Hi There,</span>
          <span>I am Parijat Millind</span>
          <span>I am into Web Development</span>
        </div>
        <div>
          <a href={Resume} download>
            <button className="button sbutton">Download CV</button>
          </a>
        </div>
        <div className="iicons">

          <a href="https://www.linkedin.com/in/parijat-millind-89b944219/">
            {" "}
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/parijat_millind/">
            {" "}
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.hackerrank.com/parijat_millind1">
            {" "}
            <img src={Hackerrank} alt="" />
          </a>
        </div>
      </div>
      <div className="iright dp">
        <img src={Photo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
