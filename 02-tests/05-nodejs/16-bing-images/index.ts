import http from "http";
import * as fs from "fs";
import * as path from "path";

const fetchHTML = (url: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      http.get(url, (res: any) => {
        let rawHtml = "";
        res.on("data", (chunk: any) => (rawHtml += chunk));
        res.on("end", () => resolve(rawHtml));
      });
    } catch (e) {
      reject(e);
    }
  });
};

const fetchUrls = async (search: string, index?: number, width?: number) => {
  const query = search.split(" ").join("+");
  let url = `http://www.bing.com/images/search?q=${query}`;
  if (index) url += `&first=${index}`;
  if (index) url += `&cw=${width}&ch=1080`;
  console.log(url);

  const page = await fetchHTML(url);
  const imgData = page.replace(/&quot;/g, '"').match(/"murl":".*?"/gm) || [];
  const imgSource = imgData.join(",").match(/"https:\/\/.*?"/gm) || [];
  const imgUrl = imgSource.map((url) => url.replace(/\"/g, ""));
  return imgUrl;
};

const featGameImages = async (search: string) => {
  return [
    ...(await fetchUrls(search + " wallpaper hd", 1, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 40, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 80, 2560)),
  ];
};

const downloadImage = async (imageUrl: string) => {
  try {
    const outDir = "./out/";
    const response = await fetch(imageUrl);
    if (!response.ok) return;
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const fileName = `${Math.random().toString(16).slice(2)}.jpg`;
    const outputPath = path.join(outDir, fileName);
    const fileStream = fs.createWriteStream(outputPath);
    const file = await response.arrayBuffer();
    fileStream.write(Buffer.from(file));
    console.log("saved file: " + fileName);
  } catch (error) {
    console.error("Error fetching and saving the image:", error);
  }
};

featGameImages("forza horizon").then(async (images: string[]) => {
  const dowloadingImages = images.map((url) => downloadImage(url));
  await Promise.all(dowloadingImages);
});
