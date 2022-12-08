import { Box } from "@material-ui/core";
import { PropsWithChildren } from "react";

const Body = (props: PropsWithChildren) => (
  <Box height={"100%"} p={2}>
    {props.children}
  </Box>
);

export default Body;
