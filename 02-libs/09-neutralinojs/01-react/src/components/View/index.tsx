import { Box, ThemeProvider } from "@material-ui/core";
import { PropsWithChildren } from "react";

import useGlobalContext from "../../hooks/useGlobalContext";
import theme from "../../theme";

const View = (props: PropsWithChildren) => {
  const [global] = useGlobalContext();
  const customTheme = theme(global.darkTheme);

  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      margin={0}
      padding={0}
      overflow="hidden"
      color={customTheme.palette.text.primary}
      bgcolor={customTheme.palette.background.default}
    >
      <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>
    </Box>
  );
};

export default View;
