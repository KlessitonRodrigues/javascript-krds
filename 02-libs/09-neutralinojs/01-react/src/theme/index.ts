import { createTheme } from "@material-ui/core";

import { overrides } from "./overrides";
import { palette } from "./palette";
import { typography } from "./typography";

const theme = createTheme({
  palette,
  overrides,
  typography,
  spacing(factor) {
    return factor * 0.25 + "rem";
  },
});

export default theme;
