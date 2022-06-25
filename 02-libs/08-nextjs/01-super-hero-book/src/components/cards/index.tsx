import styles from "@styles/cards.module.css";
import { useState } from "react";
import { useHeroContext } from "src/hooks/useHeroContext";
import Minicard from "./minicard";
import Toolbar from "./toolbar";

import * as actions from "./actions";

const Cards = () => {
  const { heroes } = useHeroContext();
  const [page, setPage] = useState(actions.pagination(heroes));

  return (
    <div className={styles.container}>
      <Toolbar />
      <div className={styles.cardsGrid}>
        {page.heroesOnPage.map((hero) => (
          <Minicard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
