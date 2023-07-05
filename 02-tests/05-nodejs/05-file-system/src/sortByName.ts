/*

const newObj: GameInfoByAlphabet = {};

gameInfo.forEach((game) => {
  const gameName = String(game.Game).replace(/[^a-zA-Z0-9 ]/g, "");
  const firstLetter = (String(gameName).toLowerCase().trim() || "#")[0];
  if (newObj[firstLetter]?.length) newObj[firstLetter].push(game);
  else newObj[firstLetter] = [game];
});

console.log(Object.keys(newObj));

fs.writeFileSync(jsonFolder + "out5.json", JSON.stringify(newObj));

*/
