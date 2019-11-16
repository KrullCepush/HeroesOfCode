import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import FightLocation from "./FightComponents/FightLocation";
import MoveLocation from "./FightComponents/MoveLocation/MoveLocation";
import MainPage from "./mainPageComponents/MainPage";
import HomeComponent from "./HomeComponents/HomeComponent";

import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={HomeComponent} />
        <Route exact path="/figth" component={FightApp} />
        <Route exact path="/figth/pve/locations" component={FightLocation} />
        <Route path="/figth/pve/locations/:location" component={MoveLocation} />
      </Router>
    );
  }
}

export default App;
