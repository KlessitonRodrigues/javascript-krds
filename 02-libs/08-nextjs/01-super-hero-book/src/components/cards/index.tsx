import styles from "@styles/cards.module.css";
import Minicard from "./minicard";
import Toolbar from "./toolbar";

const Cards = () => (
  <div className={styles.container}>
    <Toolbar />
    <Minicard />
  </div>
);

export default Cards;
