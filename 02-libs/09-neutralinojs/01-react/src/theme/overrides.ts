import { ThemeOptions } from "@material-ui/core";

type Overrides = (
  palette: ThemeOptions["palette"]
) => ThemeOptions["overrides"];

export const overridesStyles: Overrides = (palette) => {
  return {
    MuiContainer: {
      root: { padding: "0.5rem" },
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          cursor: "pointer",
          textDecoration: "none",
          color: palette.text.primary,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: "0.25rem",
        cursor: "pointer",
        color: palette.text.primary,
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
};
