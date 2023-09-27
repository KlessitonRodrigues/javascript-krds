import { writeFileSync, readFileSync } from "fs";
import { fetchAllGames } from "./fetchPage";
import { readGameList } from "./readGameList";

/* 
fetchAllGames(1).then((gameList) => {
  writeFileSync("./GameList.json", JSON.stringify(gameList));
});
*/

readGameList("./GameList_1000.json");
