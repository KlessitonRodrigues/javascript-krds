import { instagramAPIHeaders } from "./util";

export const getHashtagMedia = async (hashtagName: string) => {
  try {
    const url = ` https://www.instagram.com/api/v1/tags/web_info/?tag_name=${hashtagName}`;
    const request: RequestInit = {
      headers: {
        ...instagramAPIHeaders,
        Referer: `https://www.instagram.com/explore/tags/${hashtagName}/`,
      },
      body: null,
      method: "GET",
    };

    const result = await fetch(url, request);
    const { data } = await result.json();
    if (!data) return [];

    const sections = data["top"]["sections"] as any[];
    const mediaSections = sections.filter((sec) => sec.feed_type === "media");
    const hashtagSections = mediaSections.map((section) => {
      const mediaByLayout = section["layout_content"]["medias"] as any[];
      return mediaByLayout.map((media) => {
        const videoVersions = media["media"]["video_versions"];
        if (videoVersions?.length) return videoVersions[0].url;
        return "";
      });
    });

    return hashtagSections.flat().filter((value) => !!value) as string[];
  } catch (err) {
    console.error(err);
  }
};
