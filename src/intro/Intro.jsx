import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Codechef from "../img/codechef.png";
import Hackerrank from "../img/hackerrank.png";
import Photo from "../img/photo.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="ileft">
        <div className="iname">
          <span>Hi! I Am</span>
          <span>Parijat Millind</span>
          <span>java,c++,HTML,CSS Javascript,React js</span>
        </div>
        <button className=" button ibutton">Hire me</button>
        <div className="iicons">
          <a href="https://github.com/parijat-millind">
            {" "}
            <img src={Github} alt="" />
          </a>
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
          <a href="https://www.codechef.com/users/parijat_03">
            {" "}
            <img src={Codechef} alt="" />
          </a>
        </div>
      </div>
      <div className="iright">
        <img src={Photo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
