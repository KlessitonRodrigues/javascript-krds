import { readFileSync, writeFileSync } from "fs";
import { getJWTClient } from "./Auth/handleTokens";
import { getTreading } from "./Youtube/trendings";
import { getVideoChunk } from "./Youtube/videoChunk";
import { fetchYTVideo } from "./YTLD";
import { queryToObj } from "./util/queryToObj";
import { getAudioChunk } from "./Youtube/audioChunk";

const main = async () => {
  const creds = {
    email: "",
    key: "",
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  };

  // const jwt = getJWTClient(creds);
  // const res = await getTreading(jwt);
  // const video = res.data.items || [];
  // console.log(video);

  /*
  await fetch(`https://www.youtube.com/embed/${video.id}`)
    .then((res) => res.text())
    .then((text) => {
      console.log(text);
    });

  await getVideoChunk()
    .then((res) => res.arrayBuffer())
    .then((data) => {
      // const bin = Buffer.from(data);
      const bin = new Uint8Array(data);
      writeFileSync("video.mp4", bin);
      console.log(data);
    });
  await getAudioChunk()
    .then((res) => res.arrayBuffer())
    .then((data) => {
      const bin = Buffer.from(data);
      // const bin = new Uint8Array(data);
      writeFileSync("audio.mp4a", bin);
      console.log(data);
    });
  */

  const fileName = await fetchYTVideo(
    "https://www.youtube.com/watch?v=9r0KVQvmYU4"
  );
};

main().catch(console.error);
