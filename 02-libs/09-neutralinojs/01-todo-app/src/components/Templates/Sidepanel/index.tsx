import Box from "@mui/material/Box";
import { ReactNode } from "react";

import * as style from "./styles";

type Props = {
  children: ReactNode;
  show: boolean;
  width?: string;
};

const Sidepanel = (props: Props) => {
  return (
    <Box p={2} px={4} width={props.width || "50vw"} style={style.sidepanelOpen(props.show)}>
      {props.children}
    </Box>
  );
};

export default Sidepanel;
