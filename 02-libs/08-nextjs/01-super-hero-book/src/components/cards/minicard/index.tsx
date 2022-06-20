import styles from "@styles/cards.module.css";
import Image from "next/image";

import * as actions from "../actions";

type Props = {
  hero: HeroData;
};

const Minicard = ({ hero }: Props) => {
  return (
    <div className={styles.minicard}>
      <div>
        <Image
          alt="hero image"
          src={hero.images.md}
          width="48"
          height="48"
          layout="responsive"
        />
      </div>
      <div className={styles.minicardContent}>
        <div className={styles.minicardContentName}>{hero.name}</div>
        <div className={styles.minicardContentTags}>{hero.work.occupation}</div>
        <div className={styles.minicardContentPowerStatus}>
          <span>COM {hero.powerstats.combat}</span>
          <span>DUR {hero.powerstats.durability}</span>
          <span>INT {hero.powerstats.intelligence}</span>
          <span>POW {hero.powerstats.power}</span>
          <span>SPE {hero.powerstats.speed}</span>
          <span>STR {hero.powerstats.strength}</span>
        </div>
        <div className={styles.minicardContentOverhall}>
          <span>{actions.calculateOverhall(hero)}</span>
          Overhall
        </div>
      </div>
    </div>
  );
};

export default Minicard;
