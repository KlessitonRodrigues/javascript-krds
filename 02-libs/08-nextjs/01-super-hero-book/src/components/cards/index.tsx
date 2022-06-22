import styles from "@styles/cards.module.css";
import { useHeroContext } from "src/hooks/useContext";
import Minicard from "./minicard";
import Toolbar from "./toolbar";

const Cards = () => {
  const { heroes } = useHeroContext();

  return (
    <div className={styles.container}>
      <Toolbar />
      <div className={styles.cardsGrid}>
        <Minicard hero={heroes[0]} />
        <Minicard hero={heroes[0]} />
        <Minicard hero={heroes[0]} />
        <Minicard hero={heroes[0]} />
      </div>
    </div>
  );
};

export default Cards;
