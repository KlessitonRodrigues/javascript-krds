/*
const newArr: GameInfo2[] = [];

gameInfo.forEach((game, i) => {
  const searchIndex = newArr.findIndex((item) => item.Game === game.Game);

  if (searchIndex < 0) {
    return newArr.push({ ...game, Platform: [game.Platform] });
  }

  const gamePlatform = game.Platform?.replace("the", "").trim();
  if (!newArr[searchIndex].Platform.includes(gamePlatform)) {
    newArr[searchIndex].Platform.push(gamePlatform);
  }

  console.log("item", i);
});

fs.writeFileSync(jsonFolder + "out2.json", JSON.stringify(newArr));

*/
