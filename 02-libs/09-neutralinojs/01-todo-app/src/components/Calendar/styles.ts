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
    overflow: "hidden",
  };

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      height: "2rem",
      borderRadius: "0.75rem 0.75rem 0 0",
      backgroundColor: palette.blue,
      color: "#fff",
      fontWeight: "bold",
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
      boxShadow: "none",
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

type CalendarItemFloat = "topLeft" | "bottomLeft" | "topRight";
export const calendarItemFloat = (position: CalendarItemFloat): CSSProperties => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    position: "absolute",
    padding: "0.25rem 0.5rem",
    fontSize: "0.8rem",
    overflow: "hidden",
  };

  if (position === "topLeft")
    return {
      ...base,
      top: "0",
      left: "0",
      fontWeight: "bold",
      backgroundColor: palette.blue + "bb",
      color: palette.white,
      borderRadius: "0 0 0.5rem 0",
    };

  if (position === "bottomLeft")
    return {
      ...base,
      bottom: "0",
      left: "0",
      borderRadius: "0",
      maxWidth: "80%",
    };

  if (position === "topRight")
    return {
      ...base,
      top: "0",
      right: "0",
      borderRadius: "0",
      color: palette.dark,
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
