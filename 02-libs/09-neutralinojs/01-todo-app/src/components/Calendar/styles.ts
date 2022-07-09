import { CSSProperties } from "react";
import usePaletteContext, { PaletteContext } from "../../hooks/usePalette";

export type DayBoxStyles = "base" | "day" | "header" | "weekId";
export const dayBoxStyles = (boxStyle: DayBoxStyles, palette: PaletteContext) => {
  const base: CSSProperties = {
    padding: "0.5rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    boxShadow: "1px 2px 4px #2222",
  };

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      height: "2rem",
      borderRadius: "0.75rem 0.75rem 0 0",
      backgroundColor: palette.blue,
      color: "#fff",
      boxShadow: "1px 2px 4px #2224",
    },
    day: {
      ...base,
      border: "1px solid" + palette.border,
      borderRadius: "0.5rem",
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
  gridTemplateRows: "0.4fr",
  rowGap: "0.5rem",
  columnGap: "0.5rem",
  justifyItems: "stretch",
  alignItems: "center",
  textAlign: "center",
};

export const calendarItemFloat = (position: "topLeft" | "bottomLeft"): CSSProperties => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    padding: "0.25rem 0.5rem",
    backgroundColor: palette.blue + "22",
    fontSize: "0.9rem",
    borderRadius: "0 0 0.5rem 0",
    overflow: "hidden",
    maxWidth: "80%",
  };

  if (position === "bottomLeft")
    return {
      ...base,
      top: "unset",
      bottom: "0",
      left: "0",
      borderRadius: "0",
      backgroundColor: "transparent",
    };
  return base;
};

export const calendarTask: CSSProperties = {
  fontSize: "0.75rem",
  borderRadius: "0.25rem",
  padding: "0.1rem 0.2rem",
  marginBottom: "0.1rem",
};

export const calendarItemContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1.5rem 0rem 1rem",
  textAlign: "left",
};
