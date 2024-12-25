import http from "http";
import * as fs from "fs";
import * as path from "path";

const getID = () => Math.random().toString(16).slice(2);

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
// http://www.bing.com/images/async?q=${query}
// http://www.bing.com/images/search?q=${query}

const fetchUrls = async (search: string, index?: number, width?: number) => {
  const query = search.split(" ").join("+");
  let url = `http://www.bing.com/images/async?q=${query}`;
  if (index) url += `&first=${index}`;
  if (width) url += `&cw=${width}&ch=1080`;

  const page = await fetchHTML(url);
  const imgData = page.replace(/&quot;/g, '"').match(/"murl":".*?"/gm) || [];
  const imgSource = imgData.join(",").match(/"https:\/\/.*?"/gm) || [];
  const imgUrl = imgSource.map((url) => url.replace(/\"/g, ""));
  return imgUrl;
};

const featGameImages = async (search: string) => {
  const urlList = [
    ...(await fetchUrls(search + " wallpaper hd", 1, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 40, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 80, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 120, 2560)),
    ...(await fetchUrls(search + " wallpaper hd", 160, 2560)),
  ];

  return urlList.reduce<string[]>((acc, url) => {
    if (acc.indexOf(url) < 0) return [...acc, url];
    return acc;
  }, []);
};

const downloadImage = async (imageUrl: string) => {
  try {
    const outDir = `./out/`;
    const response = await fetch(imageUrl);
    if (!response.ok) return;
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const outputPath = path.join(outDir, `${getID()}.jpg`);
    const fileStream = fs.createWriteStream(outputPath);
    const file = await response.arrayBuffer();
    fileStream.write(Buffer.from(file));
    console.log("file: " + outputPath);
  } catch (error) {
    console.error("Error fetching and saving the image:", error);
  }
};

featGameImages("chevrolet Forza").then(async (images: string[]) => {
  const dowloadingImages = images.map((url) => downloadImage(url));
  await Promise.all(dowloadingImages);
});
