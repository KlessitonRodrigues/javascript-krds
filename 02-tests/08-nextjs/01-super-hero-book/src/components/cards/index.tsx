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
    <div className={styles.container} id="cards-grid">
      <Toolbar
        onNext={() => setPage(actions.pagination(heroes, page.page + 1))}
        onPrev={() => setPage(actions.pagination(heroes, page.page - 1))}
        onStart={() => setPage(actions.pagination(heroes, 0))}
        onEnd={() =>
          setPage(actions.pagination(heroes, page.total / page.pageSize - 1))
        }
        onPageSize={() =>
          setPage(
            actions.pagination(
              heroes,
              page.pageSize,
              actions.pageSizeToggle(page.pageSize, [20, 40, 60])
            )
          )
        }
        itemsPerPage={page.pageSize}
      />
      <div className={styles.cardsGrid}>
        {page.heroesOnPage.map((hero) => (
          <Minicard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
