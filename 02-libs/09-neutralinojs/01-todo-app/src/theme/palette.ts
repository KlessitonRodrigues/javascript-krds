import { ThemeOptions, colors } from "@mui/material";

export const lightPalette: ThemeOptions["palette"] = {
  background: { default: "#fff" },
  primary: colors.blue,
  secondary: colors.purple,
  text: {
    primary: "#444",
    secondary: "#222",
  },
};

export const darkPalette: ThemeOptions["palette"] = {
  background: { default: "#222" },
  primary: colors.blue,
  secondary: colors.purple,
  text: {
    primary: "#ddd",
    secondary: "#ccc",
  },
};
