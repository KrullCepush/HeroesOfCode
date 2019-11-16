function randomNumberArray(generatorNameArray) {
  const arrayLength = generatorNameArray.length;
  const randomNumber = Math.floor(Math.random() * arrayLength);

  return randomNumber;
}

export default randomNumberArray;
