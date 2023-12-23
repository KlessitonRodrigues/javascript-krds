import { writeFileSync } from "fs";
import { fetchAllGames } from "./fetchPage";

fetchAllGames(3000).then((gameList) => {
  writeFileSync("./data/GameList1.json", JSON.stringify(gameList));
});
