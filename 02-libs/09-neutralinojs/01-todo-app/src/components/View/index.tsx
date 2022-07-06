import { Box, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

import useGlobalContext from "../../hooks/useGlobalContext";
import theme from "../../theme";
import { viewStyles } from "./styles";

const View = (props: PropsWithChildren) => {
  const [global] = useGlobalContext();
  const customTheme = theme(global.darkTheme);

  return (
    <Box
      style={viewStyles}
      color={customTheme.palette.text.primary}
      bgcolor={customTheme.palette.background.default}
    >
      <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
    </Box>
  );
};

export default View;
