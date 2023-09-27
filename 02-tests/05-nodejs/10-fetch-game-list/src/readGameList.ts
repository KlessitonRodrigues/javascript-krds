import { readFileSync } from "fs";
import { NewGameInfo } from "./fetchPage";

export const readGameList = (filePath: string) => {
  const file = readFileSync(filePath);
  const gameList = JSON.parse(file.toString()) as NewGameInfo[];
  console.log(gameList.find((g) => g.t.toLowerCase().includes("skyrim")));
};
