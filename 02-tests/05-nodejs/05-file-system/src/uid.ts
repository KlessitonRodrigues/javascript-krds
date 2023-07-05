export const createUID = () => {
  const random = Math.random();
  const time = new Date().getTime();
  return (random.toString(16) + time.toString(16))
    .replace(/\W/g, "f")
    .substring(0, 20);
};
