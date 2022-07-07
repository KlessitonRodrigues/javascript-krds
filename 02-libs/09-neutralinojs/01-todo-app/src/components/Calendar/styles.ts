import { CSSProperties } from "react";
import blue from "@mui/material/colors/blue";

type DayBoxStyles = "base" | "day" | "header" | "month" | "weekId";
export const dayBoxStyles = (boxStyle: DayBoxStyles) => {
  const base: CSSProperties = {
    padding: "0.5rem",
  };

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      borderBottom: "1px solid #2222",
    },
    day: {
      ...base,
      border: "1px solid #2222",
      borderRadius: "0.5rem",
      verticalAlign: "center",
      height: "4rem",
    },
    weekId: {
      ...base,
      height: "4rem",
    },
    month: {
      ...base,
      fontWeight: "bold",
      borderRight: `2px solid ${blue["300"]}AA`,
      borderBottom: `2px solid ${blue["300"]}AA`,
      height: "2rem",
      borderRadius: "1rem 0",
    },
  };

  return styles[boxStyle];
};

export const calendarGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(6, 1fr)",
  rowGap: "0.5rem",
  columnGap: "0.5rem",
  justifyItems: "stretch",
  alignItems: "flex-end",
  textAlign: "center",
};
