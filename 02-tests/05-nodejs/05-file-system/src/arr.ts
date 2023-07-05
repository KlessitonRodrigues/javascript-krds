/* Read and Compile JSON files
const fileNames = fs.readdirSync(jsonFolder);
const jsonFiles = fileNames.map((fileName) =>
  fs.readFileSync(jsonFolder + fileName).toString()
);
const data = jsonFiles.map<GameInfo>((jsonFile) => JSON.parse(jsonFile)).flat();

console.log(data);

fs.writeFileSync(jsonFolder + "out.json", JSON.stringify(data));
*/

/* split an array in small sub-arrays
const getDuplicates = (gameInfoArr: GameInfo[]) => {
  return new Promise((res) => {
    const duplicated: string[] = [];
    gameInfoArr.forEach((game, i) => {
      if (gameInfoArr.some((game2, i2) => game2.Game === game.Game && i !== i2))
        duplicated.push(game.Game);
    });
    res(duplicated);
  });
};

const splitArray = (gameInfoArr: GameInfo[], amount: number) => {
  const itemsByArray = gameInfoArr.length / amount;
  const newArray = new Array(amount).fill(0);
  return newArray.map<GameInfo[]>((value, i) => {
    return gameInfoArr.slice(itemsByArray * i, itemsByArray * (i + 1));
  });
};

*/
