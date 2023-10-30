import { mediaAPIHeaders } from "./util";

export const getMediaContent = async (mediaUrl: string) => {
  try {
    const request: RequestInit = {
      headers: mediaAPIHeaders,
      body: null,
      method: "GET",
    };
    const result = await fetch(mediaUrl, request);
    const data = await result.arrayBuffer();
    return new Uint8Array(data);
  } catch (err) {
    console.error(err);
  }
};
