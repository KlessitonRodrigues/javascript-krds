import fs from "node:fs";

type GameInfo = {
  Game: string;
  GameLink: string;
  Year: number;
  Dev: string;
  DevLink: string;
  Publisher: string;
  PublisherLink: string;
  Platform: string;
};

type GameInfoByName = Record<string, GameInfo[]>;

const outDir = "./data/GamesDB/";
const json = fs.readFileSync(outDir + "WindowsGames.json").toString();
const gameInfoArr = JSON.parse(json) as GameInfo[];

console.log("start length", gameInfoArr.length);

const newArr = gameInfoArr
  .filter((gi) => {
    if (gi.Year < 2008) return false;
    return true;
  })
  .map((gi) => ({
    name: gi.Game,
    year: Number(gi.Year) || undefined,
    publisher: gi.Publisher || undefined,
    development: gi.Publisher === gi.Dev ? undefined : gi.Dev,
  }));

console.log("end length", newArr.length);
console.log(newArr[0]);

fs.writeFileSync(outDir + "out1.json", JSON.stringify(newArr));
