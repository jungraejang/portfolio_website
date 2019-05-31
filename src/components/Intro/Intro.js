import React from "react"
import "./Intro.css"
import Typist from 'react-typist';


const Intro = () => {
  return (
    <div className="intro-div">
    <h1>Booting System</h1>
    <br />
    <br />
    <Typist>
    <p>loading booting element</p>
    <Typist.Delay ms={500} />
    <p>.......................</p>
    </Typist>
    </div>
  )
}

export default Intro
