import styles from "@styles/cards.module.css";
import RoudedButton from "@templates/buttons/rounded";

const Toolbar = () => (
  <div className={styles.toolbar}>
    <RoudedButton label="prev" onClick={() => {}} />
    <div>
      <RoudedButton label="start" onClick={() => {}} />
      <RoudedButton label="end" onClick={() => {}} />
      <RoudedButton label="reload" onClick={() => {}} />
    </div>
    <RoudedButton label="next" onClick={() => {}} />
  </div>
);

export default Toolbar;
