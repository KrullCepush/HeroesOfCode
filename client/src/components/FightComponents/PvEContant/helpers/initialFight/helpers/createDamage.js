function createDamage(oponent) {
  const initialDamage = oponent.stats.damage;
  const randomPolar = Math.floor(Math.random() * 2) === 0 ? "-" : "+";
  const randomStats = Math.floor(Math.random() * 100);
  const randomValue = parseInt(randomPolar + randomStats);
  const generateDamag = initialDamage + (initialDamage * randomValue) / 100;
  return Math.floor(generateDamag);
}

export default createDamage;
