const fetchUrls = async (search: string, first?: number, width?: number) => {
  const proxy = "http://localhost:3005/proxy?url=";
  const query = search.split(" ").join("+");
  let url = `http://www.bing.com/images/async?q=${query}`;
  if (first) url += `&first=${first}`;
  if (width) url += `&cw=${width}&ch=1080`;

  const page = (await (await fetch(proxy + url)).json()).html;
  if (!page) throw new Error("invlaid content");

  const imgData = page.replace(/&quot;/g, '"').match(/"murl":".*?"/gm) || [];
  const imgSource = imgData.join(",").match(/"https:\/\/.*?"/gm) || [];
  const imgUrl = imgSource.map((url: any) => url.replace(/\"/g, ""));
  return imgUrl;
};

export const fetchImages = async (search: string) => {
  return await fetchUrls(`${search} hd`, 1, 2560);
};
