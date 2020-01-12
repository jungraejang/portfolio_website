import React from "react";
import Typist from "react-typist";
import "./About.css";
import portrait from "../../assets/8bit_portrait.png";
const AboutPage = () => {
  return (
    <div className="about-page-div">
      <div className="introduction-div">
        <img src={portrait} id="portrait-img" />
        <p>
          My name is Jung Rae Jang also known as JR. I’m a proud immigrant from
          South Korea. Before joining Pursuit, I worked as a Community Organizer
          for non-profits/New York City government, focusing on issues such as
          immigration and affordable housing. Throughout my work, I realized
          that I had strong passion for creating and making a difference. I
          jumped into the tech industry wishing to combine these two passions.
          In the future, it is my dream to become a developer who works directly
          with Artificial Intelligence.
        </p>
      </div>
      <br />

      <br />
    </div>
  );
};

export default AboutPage;
