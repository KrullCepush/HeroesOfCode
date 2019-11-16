import React from "react";
import "./../pveboard.css";

class CharacterUnits extends React.Component {
  takeOponent = () => {
    const req = this.props.oponent;
    return req;
  };

  render() {
    return (
      <div className="oponent-wrap">
        <div className="oponent-avatar">
          <img src={this.takeOponent().avatar} alt="avatar" />
        </div>
        <div className="oponent-name">{this.takeOponent().name}</div>
        <div className="oponent-stas__log"> Stats: </div>
        <div className="oponent-stas-wrap">
          <div className="oponent-stats">
            health: <span> {this.takeOponent().stats.health} </span>
          </div>
          <div className="oponent-stats">
            damage: <span> {this.takeOponent().stats.damage} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterUnits;
