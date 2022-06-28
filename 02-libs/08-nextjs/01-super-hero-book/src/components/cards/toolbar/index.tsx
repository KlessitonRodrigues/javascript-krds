import styles from "@styles/cards.module.css";
import RoudedButton from "@templates/buttons/rounded";

type Props = {
  onPrev?: () => void;
  onStart?: () => void;
  onEnd?: () => void;
  onNext?: () => void;
  onPageSize?: () => void;
  itemsPerPage?: number;
};

const fc = () => {};

const Toolbar = (props: Props) => (
  <div className={styles.toolbar}>
    <RoudedButton label="prev" onClick={props.onPrev || fc} />
    <div>
      <RoudedButton label="start" onClick={props.onStart || fc} />
      <RoudedButton label="end" onClick={props.onEnd || fc} />
      <RoudedButton
        label={"show " + props.itemsPerPage}
        onClick={props.onPageSize || fc}
      />
    </div>
    <RoudedButton label="next" onClick={props.onNext || fc} />
  </div>
);

export default Toolbar;
