import { CSSProperties } from "react";
import { IconBaseProps } from "react-icons";

export const flexStyle: CSSProperties = {
  padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const flexBetweenStyle: CSSProperties = {
  ...flexStyle,
  justifyContent: "space-between",
};

export const iconStyle: IconBaseProps = {
  size: "24px",
  color: "#222",
  cursor: "pointer",
};

export const gridStyle: CSSProperties = {
  display: "grid",
  columnGap: "0.5rem",
  rowGap: "0.5rem",
};
