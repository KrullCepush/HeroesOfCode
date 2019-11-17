import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import CharacterUnits from "./CharacterUnits";
import TableLogs from "./TableLogs";
import { StartFightAC, EndFightFunctionAC } from "../../../redux/actions";

import CreateMob from "./helpers/createMob/createMob";
import startFight from "./helpers/initialFight/initialFight";
import loseEscape from "./helpers/initialEscape/initialEscape";

import "./../pveboard.css";
class PvEBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusFight: "hold",
      fightLogs: null,
      loading: true,
      player: null,
      mob: null,
      chanceEscape: true,
      playerDead: false
    };
  }

  goToFight = async () => {
    this.props.Figth();
    this.setState({
      loading: true,
      statusFight: "fight",
      chanceEscape: false
    });
    const playerInitial = this.state.player;
    const fight = startFight(playerInitial, this.state.mob);
    await this.setState({
      statusFight: fight.log,
      player: fight.player,
      mob: fight.mob,
      loading: false,
      fightLogs: fight.logs,
      messagelog: null
    });
    const goldCreate = Math.floor(Math.random() * 21);
    if (this.state.player.stats.health > 0) {
      this.props.EndFight(goldCreate, this.state.player.name);
    } else {
      this.props.EndFight(-goldCreate, this.state.player.name);
    }
  };

  goToRun = async () => {
    const randomChance = Math.floor(Math.random() * 2);

    if (randomChance === 1) {
      const escape = loseEscape(this.state.player, this.state.mob);
      await this.setState({
        chanceEscape: false,
        messagelog: `${this.state.mob.name} бросил в вас камень, тем самым оглушив вас и нанес ${escape.log.damage} единиц урона. Побег не удался`,
        player: escape.player
      });
    } else {
      this.props.history.push("/figth/pve/locations");
    }
  };

  async componentDidMount() {
    const cloneOfPropsPlayer = this.props.player;
    const playerInitial = cloneOfPropsPlayer;
    const createMob = CreateMob(playerInitial);
    await this.setState({
      player: playerInitial,
      mob: createMob,
      loading: false
    });
  }
  z;
  get escapeButton() {
    return (
      <>
        <button className="fight-btn" onClick={this.goToRun}>
          Go away
        </button>
      </>
    );
  }

  get startFightButton() {
    return (
      <>
        <button className="fight-btn" onClick={this.goToFight}>
          Fight
        </button>
      </>
    );
  }

  get battleStatus() {
    return <div className="fight-status"> {this.state.statusFight} </div>;
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <img
            src="https://astrotalk.com/assets/img/gif-loader/load2.gif"
            alt="loading..."
          />
        </div>
      );
    }

    return (
      <>
        <div className="pveboard-wrap">
          <div className="pveboard-oponents">
            <CharacterUnits oponent={this.state.player} />
          </div>
          <div className="wrap-fight">
            <div>
              {this.state.statusFight === "hold"
                ? this.startFightButton
                : this.battleStatus}
              {this.state.chanceEscape ? this.escapeButton : ""}
            </div>
            <div className="logs-wrap">
              {this.state.messagelog}
              <TableLogs logs={this.state.fightLogs} />
            </div>
            {this.state.statusFight === "hold" ? (
              " "
            ) : (
              <Link className="fightApp-btn__home-link" to="/home">
                <div className="fightApp-btn__home">Go to vilage</div>
              </Link>
            )}
          </div>
          <div className="pveboard-oponents">
            <CharacterUnits oponent={this.state.mob} />
          </div>
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Figth: () => dispatch(StartFightAC()),
    EndFight: (gold, playerName) =>
      dispatch(EndFightFunctionAC(gold, playerName))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(PvEBoard));
