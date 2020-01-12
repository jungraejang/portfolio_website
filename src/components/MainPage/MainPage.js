import React from "react";
import Typist from "react-typist";
import "./MainPage.css";
import horizon_bg from "../../assets/8bit_bg.png";
const MainPage = props => {
  console.log("main page prop", props);
  let cursor = {
    show: false,
    blink: true,
    element: "|",
    hideWhenDone: false,
    hideWhenDoneDelay: 1000
  };

  return (
    <div className="main-page-div">
      <br />
      <img src={horizon_bg} id="horizon_bg" />
      <br />
      <div className="welcome-message">
        <h1 id="welcome-message-name">Jung Rae Jang</h1>
        <h2 id="welcome-message-name2">Web Developer</h2>
      </div>
      <br />
      <div className="main-page-loading">
        <Typist cursor={cursor}>
          <h1 id="loading-message" className="blinking">
            Data Loaded
          </h1>
        </Typist>
      </div>
      <br />
    </div>
  );
};

export default MainPage;
