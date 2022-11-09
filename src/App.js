import React from "react";
import { Route, Switch } from "react-router-dom";
import Sound from "react-sound";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import AboutPage from "./components/About/About";
import ContactPage from "./components/Contact/Contact";
import ProjectPage from "./components/Project/Project.jsx";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import computerSound from "./assets/computerSound.mp3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pageHeight: 0,
      pageWidth: 0,
      introLoaded: false,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.loadingComplete();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      pageWidth: window.innerWidth,
      pageHeight: window.innerHeight,
    });
  };

  loadingComplete = () => {
    setTimeout(() => {
      this.setState({
        introLoaded: true,
      });
    }, 5500);
  };

  render() {
    console.log("page dimensions", this.state.pageWidth, this.state.pageHeight);
    console.log("process.env", process.env);
    return (
      <div
        className="App"
        style={{ height: this.state.pageHeight, width: this.state.pageWidth }}
      >
        <div
          className="crt"
          style={{ height: this.state.pageHeight, width: this.state.pageWidth }}
        >
          {/* <Sound
            url={computerSound}
            ignoreMobileRestrictions={true}
            playStatus={Sound.status.PLAYING}
            autoLoad={true}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          /> */}
          {this.state.introLoaded ? (
            <Switch>
              <Route
                exact
                path={"/"}
                component={() => (
                  <MainPage
                    pageWidth={this.state.pageWidth}
                    pageHeight={this.state.pageHeight}
                  />
                )}
              />
              <Route exact path={"/about"} component={AboutPage} />
              <Route exact path={"/contact"} component={ContactPage} />
              <Route exact path={"/projects"} component={ProjectPage} />
            </Switch>
          ) : (
            <Intro />
          )}
          {this.state.introLoaded ? <NavBar /> : null}
        </div>
      </div>
    );
  }
}

export default App;
