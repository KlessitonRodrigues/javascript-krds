type DisplayProps = {
  value?: string | number;
};

type ButtonProps = {
  label?: string | number;
  icon?: React.ReactNode;
  showArrows?: boolean;
  onArrowclick?: (dir: "up" | "down") => void;
  onClick?: (value: string | number) => void;
};
