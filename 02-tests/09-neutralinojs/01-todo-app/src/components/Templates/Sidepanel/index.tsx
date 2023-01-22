import Box from '@mui/material/Box';
import { ReactNode } from 'react';

import * as style from './styles';

type Props = {
  children: ReactNode;
  show: boolean;
  width?: string;
};

const Sidepanel = (props: Props) => {
  return (
    <Box p={3} width={props.width || '30rem'} style={style.sidepanelOpen(props.show)}>
      <Box>{props.children}</Box>
    </Box>
  );
};

export default Sidepanel;
