const getRandomNumber = (min: number, max: number) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
};

export default getRandomNumber;