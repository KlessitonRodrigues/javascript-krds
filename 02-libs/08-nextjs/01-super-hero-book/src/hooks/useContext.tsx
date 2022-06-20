import { createContext, useContext } from "react";

export const HeroContext = createContext<HeroContext>({ heroes: [] });

export const useHeroContext = () => {
  return useContext(HeroContext);
};
