import React from "react";
import Typist from 'react-typist';
import "./MainPage.css";
import horizon_bg from "../../assets/horizon-bg.png"
const MainPage = () => {
  return (
    <div className="main-page-div">
      <p>2019 All Rights Reserved©</p>
      <br />
      <img src={horizon_bg} id="horizon_bg" />
      <br />
      <div className="welcome-message">
        <h1 id="welcome-message-name">Jung Rae Jang</h1>
        <h2 id="welcome-message-name2">Web Developer</h2>
      </div>
      <br />
      <div className="main-page-loading">
      <h1 id="loading-message">Loading</h1>
      <Typist>
      <h1 id="loading-message">........</h1>
      </Typist>
      </div>
      <br />
    </div>
  );
};

export default MainPage;
