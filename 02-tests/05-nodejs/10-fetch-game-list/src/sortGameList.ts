import fs, { writeFileSync } from "fs";

const fileName = "data/game_list.json";
const cdnURL = "https://cdn.mobygames.com/screenshots/";

const getIndex = (name: string, items: string[]) => {
  const index = items.indexOf(name);
  return index < 0 ? items.push(name) - 1 : index;
};

export const sortGameList = () => {
  const gameListFile = fs.readFileSync(fileName).toString();
  const gameList = JSON.parse(gameListFile) as any[];

  const games: any[] = [];
  const categories: string[] = [];
  const platforms: string[] = [];

  gameList.forEach((game) => {
    const pNames = game.platforms?.map((p: any) => p.platform_name) as string[];
    const gamePlatforms = pNames.map((name) => getIndex(name, platforms));
    const description = game.description?.substring(0, 130);
    const releaseYear = (game.platforms[game.platforms?.length - 1] || {})[
      "first_release_date"
    ];
    const screenshots = game.sample_screenshots?.map((ss: any) => {
      return ss.image?.replace(cdnURL, "");
    });

    const ctNames = game.genres?.map((g: any) => ({
      t: g.genre_category,
      n: g.genre_name,
    }));

    const gameGenders = ctNames.map((obj: any) =>
      getIndex(JSON.stringify(obj), categories)
    );

    games.push({
      i: game.game_id,
      n: game.title,
      l: game.moby_url,
      d: description,
      c: game.sample_cover?.image,
      s: screenshots,
      g: gameGenders,
      p: gamePlatforms,
      y: releaseYear,
      r: game.moby_score,
    });
  });

  console.log(games[0]);

  writeFileSync(
    "data/games.json",
    JSON.stringify({ games, platforms, categories })
  );
};
