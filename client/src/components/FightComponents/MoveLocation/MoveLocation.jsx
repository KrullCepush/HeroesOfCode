import React from "react";
import "./locationBacgrounds.css";
import "./moveLocation.css";

import PvEBoard from "../PvEContant/PvEBoard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { UpdateHomeAC } from "../../../redux/actions";

class MoveLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      locationImage: 0,
      fight: false,
      locationParams: "",
      locationLogs: ""
    };
  }
  moveNext = () => {
    let data = this.state.locationImage;
    let number = Math.floor(Math.random() * 5);
    if (number === data) {
      number = Math.floor(Math.random() * 5);
    } else {
      this.setState({
        locationImage: number
      });
    }
    const random = Math.floor(Math.random() * 5);
    if (random === 4) {
      this.setState({
        fight: true
      });
    } else if (random === 3) {
      const updatePlayer = this.state.player;
      const damageTrap = Math.floor(
        (updatePlayer.stats.health * Math.floor(Math.random() * 10)) / 100
      );
      updatePlayer.stats.health -= damageTrap;
      this.setState({
        locationLogs: `I fell into the trap and got ${damageTrap} points of damage`
      });
    } else {
      this.setState({
        locationLogs: "There is nothing here, we must go on"
      });
    }
  };

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
    const params = this.props.match.params.location;
    const playerInitial = JSON.parse(JSON.stringify(this.props.player));
    this.setState({
      locationParams: params,
      player: playerInitial
    });
  }

  render() {
    if (this.state.fight) {
      return (
        <div
          className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
        >
          <div className="location-going-fight">
            <PvEBoard player={this.state.player} />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`location-going-layaout location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
      >
        <div className="move-int-wrap">
          <div className="move-int move-int__logs">
            {this.state.locationLogs}
          </div>
          <div className="move-wrap">
            <button className="move-btn move-btn_next" onClick={this.moveNext}>
              Move deeper
            </button>
            <Link className="move-btn_link" to="/home">
              <button
                className="move-btn move-btn_back"
                onClick={this.moveNext}
              >
                Back to village
              </button>
            </Link>
          </div>
          <div className="move-int move-int__stats">
            <div className="move-int__stats-wrap">
              <img src="/img/stats/health.png" alt="health" />
              <span>{this.state.player && this.state.player.stats.health}</span>
            </div>
            <div className="move-int__stats-wrap">
              <img src="/img/stats/sword.png" alt="damage" />
              <span>{this.state.player && this.state.player.stats.damage}</span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MoveLocation);
