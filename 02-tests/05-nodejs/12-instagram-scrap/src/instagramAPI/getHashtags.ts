import { instagramAPIHeaders } from "./util";

type Hashtag = { name: string; media_count: number; id: number };

export const getHashtags = async (hashtagName: string) => {
  try {
    const url = "https://www.instagram.com/api/graphql";
    const searchQuery = {
      data: {
        query: `#${hashtagName}`,
        context: "blended",
        include_reel: true,
        search_surface: "web_top_search",
      },
      hasQuery: true,
    };

    const encoded = encodeURIComponent(JSON.stringify(searchQuery));
    const request: RequestInit = {
      headers: instagramAPIHeaders,
      body: `av=17841462491818246&__d=www&__user=0&__a=1&__req=2y&__hs=19655.HYP%3Ainstagram_web_pkg.2.1..0.1&dpr=1&__ccg=UNKNOWN&__rev=1009445723&__s=%3Aibkk0m%3Asodu02&__hsi=7293680554404643882&__dyn=7xeUmwlEnwn8yEqxenFw9-2i5U4e1ZyUW3qi2K360CEboG4E2vwpUe8hwaG0Z82_CwjE1xoswIK1Rw8G11xmfz81s8hwGwQwoEcE7O2l0Fwqo31w9a9x-0z8-U2zxe2GewGwso88cobEaU2eUlwhEe88o5i7-0iK2Sq2-azqwt8dUaoaQ0z8c86-3u2WE5B0oo5C1Iwqo5q1IGp1yUow&__csr=gsiONsj4OYJn_mO8PkJFdnnWKJFZb9bH8LG-zkhd97VSBIJkF9ehXXQ9WulrmHl2rVeJ4igOWEHXK9ExKGHTJfGuhCKUCUOiaJ6Qhk44qm00ht21RwPhoAU24z20mS2m4ona0Vo1Bk0uedU3LwSg2tzVC0b3w8IMCem96cM6C0tfA40qhqxZm9sqMz4wIw824oSE14y064wca0x60Tk1h8EsS263u8Dlxzgqy8fU0DG9a1Uwhk1yweO3p0Swel0UCxuczt0Iw0o1Ec8420u1024U0nyxG&__comet_req=7&fb_dtsg=NAcMnDEJzV1i5xYi1ea0jduQfWsu75r8xGK3MITcSm2EGxmgWFwTH0Q%3A17865553615041151%3A1698149837&jazoest=26224&lsd=bTMrCFmknKBWvpt-8dYjUt&__spin_r=1009445723&__spin_b=trunk&__spin_t=1698192338&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisSearchBoxRefetchableQuery&variables=${encoded}&server_timestamps=true&doc_id=6460896210645763`,
      method: "POST",
    };

    const result = await fetch(url, request);
    const { data } = await result.json();
    if (!data) return [];

    const queryResult = data["xdt_api__v1__fbsearch__topsearch_connection"];
    const hashtagArr = queryResult["hashtags"].map((item: any) => item.hashtag);
    return hashtagArr as Hashtag[];
  } catch (err) {
    console.error(err);
  }
};
