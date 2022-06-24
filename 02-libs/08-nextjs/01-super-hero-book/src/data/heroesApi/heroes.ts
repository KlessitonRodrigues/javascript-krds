import axios from "axios";

export const getHeroById = async (url: string, id: number) => {
  const { data } = await axios.get<HeroData>(`${url}/id/${id}.json`);
  return data;
};

export const getAllHeroes = async (url: string) => {
  const { data } = await axios.get<HeroData>(`${url}/all.json`);
  return data;
};

export const getAppearenceById = async (url: string, id: number) => {
  const { data } = await axios.get<HeroData>(`${url}/${id}.json`);
  return data;
};
