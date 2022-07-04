import { createTheme } from "@material-ui/core";

import { overridesStyles } from "./overrides";
import { darkPalette, lightPalette } from "./palette";
import { typography } from "./typography";

const theme = (useDark: boolean) => {
  const palette = useDark ? darkPalette : lightPalette;
  const overrides = overridesStyles(palette);

  return createTheme({
    palette,
    overrides,
    typography,
    spacing(factor) {
      return factor * 0.25 + "rem";
    },
  });
};

export default theme;
