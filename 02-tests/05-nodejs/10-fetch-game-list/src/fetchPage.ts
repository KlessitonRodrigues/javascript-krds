type GameInfo = {
  companies: { id: number; name: string; title_id: number }[];
  critic_score: number;
  genres: [{ id: number; name: string }];
  release_date: string;
  title: string;
};

export type NewGameInfo = {
  t: string; // title
  c: string; // company
  s: number; // score
  g: string; // gender
  r: string; // release
};

export const fetchGameList = (page: number) => {
  return new Promise<GameInfo[]>((resolve, reject) => {
    const body = {
      title: null,
      platform: [3],
      genres: [],
      attributes: [],
      company: null,
      groups: [],
      year: 2008,
      endyear: null,
      sort: "moby_score",
      perpage: 50,
      min_critic_votes: 5,
      min_user_votes: 25,
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
      .then((json) => resolve(json.data.games))
      .catch(reject);
  });
};

export const fetchAllGames = async (pages: number) => {
  const gameList: NewGameInfo[] = [];

  const formatCompanyName = (name: string) => {
    const splittedName = name.split(" ");
    splittedName.length = 2;
    return splittedName.join(" ").trim();
  };

  for (let i = 1; i <= pages; i++) {
    const list = await fetchGameList(i).catch((err) => []);
    console.log(`page ${i} ${list.length}`);

    list.forEach((game) => {
      gameList.push({
        t: game.title,
        r: game.release_date,
        s: game.critic_score,
        g: game.genres[0].name,
        c: formatCompanyName(
          game.companies.find((co) => co.title_id === 1)?.name ||
            game.companies[0].name
        ),
      });
    });
  }

  console.log(`Total ${gameList.length}`);
  return gameList;
};
