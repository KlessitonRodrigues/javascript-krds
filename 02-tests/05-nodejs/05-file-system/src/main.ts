import fs from "node:fs";
import path from "node:path";

type GameInfo = {
  id: string;
  Game: string;
  GameLink: string;
  Year: number;
  Dev: string;
  DevLink: string;
  Publisher: string;
  PublisherLink: string;
  Platform: string[];
};

type GameInfoByName = Record<string, GameInfo[]>;

const jsonFolder = path.join(__dirname, "./data/GamesDB/");
const json = fs.readFileSync(jsonFolder + "out5.json").toString();
const gameInfo = JSON.parse(json) as GameInfoByName;

console.log(gameInfo["a"]);
