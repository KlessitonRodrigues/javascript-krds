import styles from "@styles/button.module.css";

type Props = {
  label: string;
  onClick: () => any;
};

const RoudedButton = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.buttonRounded}>
      {label}
    </button>
  );
};

export default RoudedButton;
