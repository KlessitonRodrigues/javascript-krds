import ytdl from "ytdl-core";
import { createWriteStream } from "fs";

export const fetchYTVideo = async (url: string) => {
  return new Promise<string>((res) => {
    const fileName = "/tmp/video.mp4";
    const file = createWriteStream(fileName);
    const videoData = ytdl(url);
    videoData.pipe(file);
    videoData.once("end", () => res(fileName));
  });
};
