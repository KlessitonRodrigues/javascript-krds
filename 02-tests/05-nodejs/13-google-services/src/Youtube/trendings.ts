import { Auth, google } from "googleapis";

export const getTreading = async (jwt: Auth.JWT) => {
  const list = await google.youtube("v3").videos.list({
    auth: jwt,
    chart: "mostPopular",
    maxResults: 50,
    regionCode: "BR",
    part: "snippet,contentDetails,statistics",
  } as any);

  console.log("Treading", list);
  return list;
};
