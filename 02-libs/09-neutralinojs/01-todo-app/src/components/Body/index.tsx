import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const Body = (props: PropsWithChildren) => (
  <Box height={"100%"} p={2}>
    {props.children}
  </Box>
);

export default Body;
