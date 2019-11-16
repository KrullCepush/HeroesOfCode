function loseEscape(player, mob) {
  const InitPlayer = player;
  const randomStats = Math.floor(Math.random() * 15);
  const damageMob = Math.floor((InitPlayer.stats.health * randomStats) / 100);
  InitPlayer.stats.health += -damageMob;
  return {
    player: InitPlayer,
    log: {
      assaulter: mob.name,
      damage: damageMob,
      defending: player.name
    }
  };
}

export default loseEscape;
