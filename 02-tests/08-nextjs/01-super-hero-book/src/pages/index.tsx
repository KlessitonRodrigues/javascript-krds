import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import styles from "@styles/homePage.module.css";
import Header from "../components/header";
import Cards from "../components/cards";
import { HeroContext } from "src/hooks/useHeroContext";
import api from "../data/api";

type Props = {
  heroes: HeroData[];
};

const Home: NextPage<Props> = ({ heroes }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Heroes Book</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeroContext.Provider value={{ heroes }}>
          <Cards />
        </HeroContext.Provider>
      </main>
      <footer></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    heroes: await api.heroesApi.getAllHeroes(),
  },
});

export default Home;