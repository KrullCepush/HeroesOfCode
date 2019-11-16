import React from "react";
import { Link } from "react-router-dom";
import "./pveboard.css";

class FightApp extends React.Component {
  render() {
    return (
      <>
        <div className="list-fightApp-wrap">
          <div className="fightApp-wrap">
            <Link
              to="/figth/pve/locations"
              className="fightApp-link fightApp-link--pve"
            >
              <div className="fightApp-link__desc">Темные земли</div>
            </Link>
            <Link
              to="#"
              className="fightApp-link fightApp-link--pvp"
              title="Временно недоступно"
            >
              <div className="fightApp-link--pvp__color">
                <div className="fightApp-link__desc">Городская арена</div>
              </div>
            </Link>
          </div>
          <Link to="/" className="fightApp-home">
            <div className="fightApp-home__link">
              <span>Вернуться...</span>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default FightApp;
