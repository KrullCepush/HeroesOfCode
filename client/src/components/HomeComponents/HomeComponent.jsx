import React from "react";
import { connect } from "react-redux";
import { UpdateHomeAC } from "../../redux/actions";
import "./home.css";

import ShopComponent from "./ShopComponent";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player,
      componentActive: null
    };
  }
  async componentDidMount() {
    const checkSession = await fetch("/users/checksession");
    const req = await checkSession.json();
    if (req.status !== true) {
      this.props.history.push("/");
    } else {
      this.props.updateStore(req.player);
      this.setState({
        player: req.player
      });
    }
  }

  redirectToGame = () => {
    this.props.history.push("/figth");
  };

  activeWindow = event => {
    this.setState({
      componentActive: event.currentTarget.getAttribute("value")
    });
  };

  logOut = async () => {
    await fetch("users/logout");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="home-wrap-bg">
        <div className="home-wrap">
          <div className="home-aside">
            <div className="home-aside-link-wrap" onClick={this.redirectToGame}>
              <img
                src="/img/header/auth/rpg-game.png"
                alt="fight"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> ShadowLands </div>
            </div>
            <div
              className="home-aside-link-wrap"
              value={"profile"}
              onClick={this.activeWindow}
            >
              <img
                src="/img/header/home.png"
                alt="home"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> Profile </div>
            </div>
            <div
              className="home-aside-link-wrap"
              value={"shop"}
              onClick={this.activeWindow}
            >
              <img
                src="/img/header/auth/rich.png"
                alt="shop"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> Shop </div>
            </div>
            <div
              className="home-aside-link-wrap"
              value={"forge"}
              onClick={this.activeWindow}
            >
              <img
                src="/img/header/auth/blacksmith.png"
                alt="forge"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> Forge </div>
            </div>
            <div
              className="home-aside-link-wrap"
              value={"alchemy"}
              onClick={this.activeWindow}
            >
              <img
                src="/img/header/auth/alchemy.png"
                alt="alchemy"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> Alchemy </div>
            </div>
            <div className="home-aside-link-wrap" onClick={this.logOut}>
              <img
                src="/img/header/auth/logout.png"
                alt="logout"
                className="home-aside__img"
              />
              <div className="home-aside__desc"> LogOut </div>
            </div>
          </div>
          <div className="home-main-wrap">
            {this.state.componentActive === "shop" && (
              <ShopComponent payloadPlayer={this.state.player} />
            )}
            {this.state.componentActive === "profile" && (
              <ShopComponent payloadPlayer={this.state.player} />
            )}
            {this.state.componentActive === "forge" && (
              <ShopComponent payloadPlayer={this.state.player} />
            )}
            {this.state.componentActive === "alchemy" && (
              <ShopComponent payloadPlayer={this.state.player} />
            )}
            {this.state.componentActive !== null && (
              <div className="home-main-wrap-closed">
                <img
                  src="img/error.png"
                  alt="closed"
                  onClick={this.activeWindow}
                  value={null}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    player: store.player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateStore: player => dispatch(UpdateHomeAC(player))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
