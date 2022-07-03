import { ThemeOptions } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const overrides: ThemeOptions["overrides"] = {
  MuiContainer: {
    root: { padding: "0.5rem" },
  },
  MuiLink: {
    root: {
      color: blue["700"],
    },
    underlineHover: {
      "&:hover": {
        cursor: "pointer",
        textDecoration: "none",
        color: "#444",
      },
    },
    underlineNone: {
      color: "#444",
    },
  },
  MuiIconButton: {
    root: {
      padding: "0.25rem",
      color: "#444",
      cursor: "pointer",
    },
    sizeSmall: {
      padding: "0.25rem",
      fontSize: "1.3rem",
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: "0.75rem",
    },
  },
};
