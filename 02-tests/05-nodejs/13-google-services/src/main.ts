import { searchVideos } from "./Youtube/search";

const main = async () => {
  searchVideos();
};

main().catch(console.error);
