import React from "react";
import Typist from "react-typist";
import "./About.css";
import portrait from "../../assets/8bit_portrait.png";
const AboutPage = () => {
  return (
    <div className="about-page-div">
      <div className="introduction-div">
        <img src={portrait} id="portrait-img" />
        <div className="about-content">
          <p>
            <span className="white-text">Name: </span>
            <span className="green-text">Jung Rae Jang</span>
          </p>
          <br />
          <p>
            <span className="white-text">About Me: </span>
            <span className="green-text">
              I’ve always been drawn to creating cool stuff whether they are
              technical or artistic in nature. As a software developer, I enjoy
              analyzing problems and sharing creative solutions to improve both
              myself and those around me. I like to tinker with Raspberry Pi or
              print cool 3D scultures during my free time. I am also an avid
              gamer who enjoys playing Starcraft 2, Dota 2, and Civilization
              series.
            </span>
          </p>
          <p className="white-text">Technical Skills:</p>
          <ul style={{ listStyleType: "disc", marginLeft: "20px"}}>
            <li>Javascript</li>
            <li>Python</li>
            <li>React JS</li>
            <li>Node/Express</li>
            <li>HTML5/CSS3</li>
            <li>PostgreSQL/MongoDB</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
      </div>
      <br />

      <br />
    </div>
  );
};

export default AboutPage;
