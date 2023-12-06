const getYtShortInfo = async (videoId: string, viewCount: string) => {
  return await fetch(`https://www.youtube.com/shorts/${videoId}`)
    .then((res) => res.text())
    .then((html) => {
      const result = html.match(/{"responseContext":{*.+}}}}}}/gm);
      const data = JSON.parse(result?.at(0) as string);
      const overlay = data["overlay"]["reelPlayerOverlayRenderer"];
      const header =
        overlay["reelPlayerHeaderSupportedRenderers"][
          "reelPlayerHeaderRenderer"
        ];

      const description = header["reelTitleText"]["runs"][0]["text"];
      const user = header["channelTitleText"]["runs"][0]["text"];
      const thumbnail = header["channelThumbnail"]["thumbnails"][0]["url"];
      const likeCount =
        overlay["likeButton"]["likeButtonRenderer"]["likeCount"];

      return {
        videoId,
        description,
        user,
        thumbnail,
        likeCount,
        viewCount,
      };
    });
};

export const getYtShorts = async (hashtag: string) => {
  return await fetch(`https://www.youtube.com/hashtag/${hashtag}/shorts`)
    .then((res) => res.text())
    .then(async (html) => {
      const result = html.match(/{"responseContext":{*.+}}}}}}}/gm);
      const data = JSON.parse(result?.at(0) as string);
      const browser = data["contents"]["twoColumnBrowseResultsRenderer"];
      const shortTab = browser["tabs"][1]["tabRenderer"]["content"];
      const shorts = shortTab["richGridRenderer"]["contents"] as any[];

      return await Promise.all(
        shorts.map(async (short) => {
          if (!short["richItemRenderer"]) return undefined;
          const content = short["richItemRenderer"]["content"];
          const shortInfo = content["reelItemRenderer"];
          const viewCount = shortInfo["viewCountText"]["simpleText"];
          const videoId = shortInfo["videoId"];
          return await getYtShortInfo(videoId, viewCount);
        })
      );
    });
};
