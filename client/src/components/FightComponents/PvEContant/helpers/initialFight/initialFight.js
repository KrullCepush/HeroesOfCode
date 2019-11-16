import goingFight from "./helpers/goingFight";

function startFight(player, mob) {
  const initialPlayer = player;
  const initialMob = mob;
  const fight = goingFight(initialPlayer, initialMob);
  const deadImg =
    "https://us.123rf.com/450wm/saphatthachat/saphatthachat1809/saphatthachat180900151/109761819-vector-pixel-art-grave-dead-isolated-cartoon.jpg?ver=6";

  if (fight.dead === "player") {
    fight.player.avatar = deadImg;
  } else if (fight.dead === "mob") {
    fight.mob.avatar = deadImg;
  }

  return fight;
}

export default startFight;
