import { Box } from "@material-ui/core";
import { PropsWithChildren } from "react";

const View = (props: PropsWithChildren) => (
  <Box height={"100vh"} width={"100vw"} margin={0} padding={0} overflow="hidden">
    {props.children}
  </Box>
);

export default View;
