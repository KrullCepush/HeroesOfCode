import generateValue from "./helpers/generateValue";
import GeneratorName from "./helpers/GeneratorName";
import mobAvatarList from "./helpers/mobAvatarList";
import randomNumberArray from "./helpers/randomNumberArray";

function CreateMob(player) {
  const InitializePlayer = player;

  const mobAvatarAndName = [
    {
      name: GeneratorName("Скелет"),
      avatar: mobAvatarList.skelets[randomNumberArray(mobAvatarList.skelets)]
    },
    {
      name: GeneratorName("Зомби"),
      avatar: mobAvatarList.zombis[randomNumberArray(mobAvatarList.zombis)]
    },
    {
      name: GeneratorName("Призрак"),
      avatar: mobAvatarList.ghosts[randomNumberArray(mobAvatarList.ghosts)]
    }
  ];

  const user = { ...InitializePlayer.stats };

  const mobType = mobAvatarAndName[randomNumberArray(mobAvatarAndName)];

  const mobName = mobType.name;
  const mobAvatar = mobType.avatar;

  const mob = {
    type: "mob",
    name: mobName,
    avatar: mobAvatar,
    stats: {
      health: Math.floor(user.health + (user.health * generateValue()) / 100),
      damage: Math.floor(user.damage + (user.damage * generateValue()) / 100)
    }
  };

  return mob;
}

export default CreateMob;
