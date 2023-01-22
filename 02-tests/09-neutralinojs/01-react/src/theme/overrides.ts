import { ThemeOptions } from "@material-ui/core";

export const overrides: ThemeOptions['overrides'] = {
  MuiContainer: {
    root: { padding: "0.5rem" },
  },
  MuiLink: {
    underlineHover: {
      "&:hover": {
        cursor: "pointer",
        textDecoration: "none",
        color: "unset",
      },
    },
  },
  MuiIconButton: {
    root: {
      padding: "0.25rem",
      cursor: "pointer",
      color: "unset",
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
