import React from "react";
import "./location.css";
import { Link } from "react-router-dom";

class FightLocation extends React.Component {
  render() {
    return (
      <div className="locations-bacground">
        <div className="location-wrap">
          <Link to="/figth/pve/locations/forest" className="location-link">
            <div className="location-link-layaout location-link-layaout--forest">
              <div className="location-link__desc">Проклятый лес</div>
            </div>
          </Link>
          <Link to="/figth/pve/locations/ruins" className="location-link">
            <div className="location-link-layaout location-link-layaout--ruins">
              <div className="location-link__desc">Забытые руины</div>
            </div>
          </Link>
          <Link to="/figth/pve/locations/caves" className="location-link">
            <div className="location-link-layaout location-link-layaout--caves">
              <div className="location-link__desc">Заброшенные шахты</div>
            </div>
          </Link>
        </div>
        <Link to="/figth" className="fightApp-home">
          <div className="fightApp-home__link">
            <span>Вернуться...</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default FightLocation;
