import React from "react";
import { Link } from "react-router-dom";
import "./pveboard.css";

class FightApp extends React.Component {
  async componentDidMount() {
    const checkSession = await fetch("/users/checksession");
    const req = await checkSession.json();
    if (req.status !== true) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
        <div className="list-fightApp-wrap">
          <div className="fightApp-wrap">
            <Link
              to="/figth/pve/locations"
              className="fightApp-link fightApp-link--pve"
            >
              <div className="fightApp-link__desc">ShadowLands</div>
            </Link>
            <Link
              to="#"
              className="fightApp-link fightApp-link--pvp"
              title="Временно недоступно"
            >
              <div className="fightApp-link--pvp__color">
                <div className="fightApp-link__desc">Arena of shadows</div>
              </div>
            </Link>
          </div>
          <Link to="/home" className="fightApp-home">
            <div className="fightApp-home__link">
              <span>Return back</span>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default FightApp;
