import * as fs from "fs";

const fileName = "data/game_list.json";

export const getGamesFormAPI = async () => {
  const apiKey = "moby_sswl52j8U91ow1oqyNOppHee0XP";
  const apiUrl = "https://api.mobygames.com/v1/games?";
  const platforms = [
    141, 288, 81, 7, 3, 13, 69, 142, 289, 203, 46, 12, 91, 86, 1, 64,
  ];
  const gameListFile = fs.readFileSync(fileName).toString();
  const gameList = JSON.parse(gameListFile) as any[];

  const query = new URLSearchParams();
  query.append("api_key", apiKey);
  query.append("platforms", platforms.toString());
  query.append("limit", "100");
  query.append("format", "normal");

  for (let page = gameList.length / 100; page <= 600; page++) {
    query.set("offset", String(gameList.length || 0));

    const res = await fetch(apiUrl + query.toString());
    const data = await res.json();

    gameList.push(...data.games);
    console.log(`page: ${page}, games: ${gameList.length}`);

    await new Promise((r) => setTimeout(r, 1500));
  }

  fs.writeFileSync(fileName, JSON.stringify(gameList));
};
