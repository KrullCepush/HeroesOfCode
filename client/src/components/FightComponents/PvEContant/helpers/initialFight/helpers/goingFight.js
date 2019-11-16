import { actionFightPlayer, actionFightMob } from "./actionFight";
const logs = [];

function goingFight(player, mob) {
  let initialPlayer = player;
  let initialMob = mob;

  if (initialPlayer.stats.health <= 0) {
    const WhoIsDead = {
      log: `${initialPlayer.name} был убит ${initialMob.name}`,
      player: player,
      mob: mob,
      logs: logs,
      dead: "player"
    };

    return WhoIsDead;
  } else if (initialMob.stats.health <= 0) {
    const WhoIsDead = {
      log: `${initialMob.name} был убит ${initialPlayer.name}`,
      player: player,
      mob: mob,
      logs: logs,
      dead: "mob"
    };

    return WhoIsDead;
  } else {
    const mobAction = actionFightMob(initialPlayer, initialMob);
    const playerAction = actionFightPlayer(initialPlayer, initialMob);
    initialPlayer.stats.health = mobAction.health;
    logs.push(mobAction.log);
    initialMob.stats.health = playerAction.health;
    logs.push(playerAction.log);
  }

  return goingFight(initialPlayer, initialMob);
}

export default goingFight;
