import React from "react";
import "./Intro.css";
import Typist from "react-typist";

const Intro = () => {
  let cursor = {
    show: false,
    blink: true,
    element: "|",
    hideWhenDone: false,
    hideWhenDoneDelay: 1000
  };
  return (
    <div className="intro-div">
      <h1>Booting System</h1>
      <br />
      <br />
      <Typist cursor={cursor}>
        <p>loading booting element</p>
        <Typist.Delay ms={500} />
        <p>.......................</p>
      </Typist>
    </div>
  );
};

export default Intro;
