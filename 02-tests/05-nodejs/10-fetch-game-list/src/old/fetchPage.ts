import { writeFileSync } from "fs";

type GameInfo = {
  companies: { name: string; title_id: number }[];
  critic_score: number;
  genres: { name: string }[];
  release_date: string;
  title: string;
  platforms: { id: number; name: string }[];
};

type NewGameInfo = {
  t: string; // title
  r: string; // release
  c: number; // company
  s: number; // score
  g: number[]; // gender
  p: number[]; // platforms
};

export type ListData = {
  genders: string[];
  platforms: string[];
  companies: string[];
  games: NewGameInfo[];
};

// gixek42306@watrf.com
// Pass@12345

export const fetchGameList = (page: number) => {
  return new Promise<GameInfo[]>((resolve, reject) => {
    const body = {
      title: null,
      platform: [
        141, 288, 81, 7, 3, 13, 69, 142, 289, 203, 46, 12, 91, 86, 1, 64,
      ],
      genres: [],
      attributes: [],
      company: null,
      groups: [],
      year: 2004,
      endyear: null,
      sort: "moby_score",
      perpage: 50,
      min_critic_votes: 5,
      min_user_votes: 10,
      _csrf_token: "104f08dc-0d73-48e1-937c-0776e04b60a5",
      page,
    };

    fetch("https://www.mobygames.com/game/?format=json", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        origin: "https://www.mobygames.com",
        cookie:
          "darkMode=false;" +
          " session-www=eyJfY3NyZl90b2tlbiI6IjEwNGYwOGRjLTBkNzMtNDhlMS05MzdjLTA3NzZlMDRiNjBhNSIsIl9mcmVzaCI6ZmFsc2UsImJhbm5lcl9vcmRlcmluZ190b3AiOjd9.ZQy4mQ.LWlLMc25yTZM9r_dOidqmtRWXu8;" +
          ` minCriticRatings=${body.min_critic_votes};` +
          ` minUserRatings=${body.min_user_votes};` +
          ` browserSort=${body.sort};` +
          ` perPage=${body.perpage}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        resolve(json.data.games);
      })
      .catch(reject);
  });
};

const getIndex = (name: string, items: string[]) => {
  const index = items.indexOf(name);
  return index < 0 ? items.push(name) - 1 : index;
};

export const fetchAllGames = async (pages: number) => {
  const games: NewGameInfo[] = [];
  const genders: string[] = [];
  const companies: string[] = [];
  const platforms: string[] = [];

  for (let i = 1; i <= pages; i++) {
    const list = await fetchGameList(i).catch((err) => []);
    console.log(`page: ${i}, page items: ${list.length}`);

    for (const game of list) {
      const company = game.companies.find((c) => c.title_id === 1);
      const companyIndex = getIndex(company?.name || "", companies);
      const genderList = game.genres.map((g) => getIndex(g.name, genders));
      const platformList = game.platforms.map((p) =>
        getIndex(p.name, platforms)
      );

      games.push({
        t: game.title,
        r: game.release_date,
        s: game.critic_score,
        c: companyIndex,
        g: genderList,
        p: platformList,
      });
    }
  }

  console.log(`List length ${games.length}`);
  return { genders, platforms, companies, games };
};

/*

Game Space
https://github.com/KlessitonRodrigues/game-station
Uses the API to auto fill up title and descriptions of new games  in a 

*/
