import styles from "@styles/cards.module.css";

const Minicard = () => {
  return (
    <div className={styles.minicard}>
      <div>image</div>
      <div className={styles.minicardContent}>
        <div>hero name</div>
        <div>name</div>
        <div>hero/vilain</div>
      </div>
    </div>
  );
};

export default Minicard;
