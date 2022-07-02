import styles from "@styles/cards.module.css";
import RoudedButton from "@templates/buttons/rounded";
import useScreenPosition from "../../../hooks/useScreenPosition";

type Props = {
  onPrev?: () => void;
  onStart?: () => void;
  onEnd?: () => void;
  onNext?: () => void;
  onPageSize?: () => void;
  itemsPerPage?: number;
};

const Toolbar = (props: Props) => {
  const position = useScreenPosition("cards-grid");

  // useEffect(() => {}, [position]);

  const fc = () => {};

  return (
    <div className={position.top < -45 ? styles.fixedToolbar : styles.toolbar}>
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
};

export default Toolbar;
