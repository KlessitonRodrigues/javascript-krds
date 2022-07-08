import { blue, red, lime, purple } from "@mui/material/colors";
import { CSSProperties } from "react";

export const flexCenter: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

export const tagItem: CSSProperties = {
  display: "inline",
  padding: "0.1rem 0.2rem",
  color: blue["400"],
  border: ` 1px solid ${blue["400"]}44`,
  borderRadius: "0.25rem",
  marginRight: "0.25rem",
  fontSize: "0.8rem",
  textTransform: "capitalize",
};
