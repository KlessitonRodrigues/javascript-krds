import { getHashtags } from "./instagramAPI/getHashtags";
import { getHashtagMedia } from "./instagramAPI/getHashtagMedia";
import { getMediaContent } from "./instagramAPI/getMediaContent";

const queryInstagramVideos = async (query: string) => {
  const hashtagArr = await getHashtags(query);
  const files: { name: string; data: Uint8Array }[] = [];
  if (!hashtagArr?.length) throw new Error("no_hashtags_found");

  for (const { name } of hashtagArr) {
    const hashtagsVideos = await getHashtagMedia(name);
    if (!hashtagsVideos?.length) continue;

    for (const url of hashtagsVideos) {
      const videoData = await getMediaContent(url);
      if (!videoData) continue;
      if (files.length > 15) return files;

      const size = videoData?.byteLength;
      const fileName = `./videos/${name}_${Date.now()}.mp4`;
      files.push({ name: fileName, data: videoData });

      console.log(`fetched media: ${(size / 1024).toFixed(2)} kb`);
    }
  }

  return files;
};

queryInstagramVideos("cars").then((data) => console.log(data));
