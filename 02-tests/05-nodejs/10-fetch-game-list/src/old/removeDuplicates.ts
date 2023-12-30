import { readFileSync, writeFileSync } from "fs";
import { ListData } from "./fetchPage";

export const removeDuplicates = (path: string) => {
  const file = readFileSync(path).toString();
  const listData = JSON.parse(file) as ListData;
  const gameList: ListData["games"] = [];

  listData.games.forEach((game) => {
    const index = gameList.findIndex(({ t }) => t === game.t);
    if (index < 0) return gameList.push(game);
  });

  console.log("list items:", listData.games.length);
  console.log("final items:", gameList.length);

  listData.games = gameList;
  writeFileSync("data/removedDuplicates.json", JSON.stringify(listData));
};
