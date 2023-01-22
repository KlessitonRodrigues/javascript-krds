import { Box } from "@material-ui/core";
import { ReactNode } from "react";

import { sidepanelClose, sidepanelOpen } from "./styles";

type Props = {
  children: ReactNode;
  show: boolean;
  width?: string;
};

const Sidepanel = (props: Props) => {
  return (
    <Box
      p={2}
      px={4}
      width={props.width || '50vw'}
      style={props.show ? sidepanelOpen : sidepanelClose}
    >
      {props.children}
    </Box>
  );
};

export default Sidepanel;
