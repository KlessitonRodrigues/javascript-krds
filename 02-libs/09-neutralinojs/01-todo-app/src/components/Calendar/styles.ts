import { CSSProperties } from "react";
import blue from "@mui/material/colors/blue";

export type DayBoxStyles = "base" | "day" | "header" | "month" | "weekId";
export const dayBoxStyles = (boxStyle: DayBoxStyles) => {
  const base: CSSProperties = {
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      height: "2rem",
    },
    month: {
      ...base,
      height: "2rem",
      borderRadius: "1rem 0",
      backgroundColor: blue["500"],
      color: "#fff",
      fontWeight: "bold",
    },
    day: {
      ...base,
      border: "1px solid #2222",
      borderRadius: "0.5rem",
      height: "6rem",
    },
    weekId: {
      ...base,
      height: "4rem",
      fontSize: "0.85rem",
    },
  };

  return styles[boxStyle];
};

export const calendarGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  rowGap: "0.5rem",
  columnGap: "0.5rem",
  justifyItems: "stretch",
  alignItems: "flex-end",
  textAlign: "center",
};

export const topLeft: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  padding: "0.25rem 0.5rem",
  backgroundColor: blue["300"] + "22",
  fontSize: "0.9rem",
  borderRadius: "0 0 0.5rem 0",
  overflow: "hidden",
  maxWidth: "80%",
};

export const bottomLeft: CSSProperties = {
  ...topLeft,
  top: "unset",
  bottom: "0",
  left: "0",
  borderRadius: "0",
  backgroundColor: "transparent",
};

export const calendarDate: CSSProperties = {
  fontSize: "1.75rem",
  color: blue["500"],
};
