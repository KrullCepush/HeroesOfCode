import createDamage from "./createDamage";

function actionFightPlayer(player, mob) {
  const mobStats = mob.stats;
  if (player.stats.health > 0) {
    const damagePlayer = createDamage(player);
    const healthMob = mobStats.health - damagePlayer;
    const result = {
      health: healthMob,
      log: {
        assaulter: player.name,
        damage: damagePlayer,
        defending: mob.name
      }
    };
    return result;
  } else {
    const result = {
      health: 0,
      log: `${mob.name} умер`
    };

    return result;
  }
}

function actionFightMob(player, mob) {
  const playerStats = player.stats;

  if (mob.stats.health > 0) {
    const damageMob = createDamage(mob);
    const healthPlayer = playerStats.health - damageMob;
    const result = {
      health: healthPlayer,
      log: {
        assaulter: mob.name,
        damage: damageMob,
        defending: player.name
      }
    };
    return result;
  } else {
    const result = {
      health: 0,
      log: `${player.name} умер`
    };
    return result;
  }
}

export { actionFightPlayer, actionFightMob };
