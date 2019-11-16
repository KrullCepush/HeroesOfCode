import React from "react";
import "./location.css";
import { Link } from "react-router-dom";

class FightLocation extends React.Component {
  async componentDidMount() {
    const checkSession = await fetch("/users/checksession");
    const req = await checkSession.json();
    if (req.status !== true) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="locations-bacground">
        <div className="location-wrap">
          <Link to="/figth/pve/locations/forest" className="location-link">
            <div className="location-link-layaout location-link-layaout--forest">
              <div className="location-link__desc">Сursed forest</div>
            </div>
          </Link>
          <Link to="/figth/pve/locations/ruins" className="location-link">
            <div className="location-link-layaout location-link-layaout--ruins">
              <div className="location-link__desc">Forgotten ruins</div>
            </div>
          </Link>
          <Link to="/figth/pve/locations/caves" className="location-link">
            <div className="location-link-layaout location-link-layaout--caves">
              <div className="location-link__desc">Abandoned mine</div>
            </div>
          </Link>
        </div>
        <Link to="/figth" className="fightApp-home">
          <div className="fightApp-home__link">
            <span>Return back</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default FightLocation;
