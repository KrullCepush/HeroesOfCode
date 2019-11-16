function generateValue() {
  const randomPolar = Math.floor(Math.random() * 2) === 0 ? "-" : "+";
  const randomStats = Math.floor(Math.random() * 30);
  const randomValue = parseInt(randomPolar + randomStats);
  return randomValue;
}

export default generateValue;
