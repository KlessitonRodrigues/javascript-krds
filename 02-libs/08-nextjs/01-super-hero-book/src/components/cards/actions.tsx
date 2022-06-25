export const formatOccupation = (text: string) =>
  text.split(",").map((text) => <span key={text}>{text}</span>);

export const calculateOverhall = (hero: HeroData) => {
  const powers = Object.keys(hero.powerstats);

  const overhall =
    // @ts-ignore
    powers.reduce((acc, powerName) => acc + hero.powerstats[powerName], 0) /
    powers.length;

  return overhall.toFixed(0);
};

export const pagination = (heroes: HeroData[], page = 0, pageSize = 16) => {
  const heroesOnPage = heroes.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  return {
    heroes,
    total: heroes.length,
    heroesOnPage,
    page,
    pageSize,
  };
};
