import axios from "axios";

const heroesApi = (url: string) => ({
  getHeroById: async (id: number) => {
    const { data } = await axios.get<HeroData>(`${url}/id/${id}.json`);
    return data;
  },

  getAllHeroes: async () => {
    const { data } = await axios.get<HeroData[]>(`${url}/all.json`);
    return data;
  },

  getAppearenceById: async (id: number) => {
    const { data } = await axios.get<HeroData>(`${url}/${id}.json`);
    return data;
  },
});

export default heroesApi;
