import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

import useGlobalContext from "../../hooks/useGlobalContext";
import usePaletteContext from "../../hooks/usePalette";
import theme from "../../theme";
import { viewStyles } from "./styles";

const View = (props: PropsWithChildren) => {
  const [global] = useGlobalContext();
  const customTheme = theme(global.darkTheme);
  const palette = usePaletteContext();

  return (
    <Box style={viewStyles} color={palette.dark} bgcolor={palette.bgLight}>
      <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
    </Box>
  );
};

export default View;
