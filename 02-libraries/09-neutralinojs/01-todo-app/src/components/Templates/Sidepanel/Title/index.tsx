import { IconButton, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { BsX } from 'react-icons/bs';

import Flex from '../../Flex';

type Props = {
  icon: ReactElement;
  title: string;
  onClose?: () => void;
};

const SidepanelTitle = (props: Props) => (
  <Flex y="center" xContent="space-between">
    <Flex y="center" xContent="start">
      {props.icon}
      <Typography variant="h2">&nbsp;{props.title}</Typography>
    </Flex>
    <IconButton>
      <BsX fontSize="1.75rem" onClick={() => props.onClose && props.onClose()} />
    </IconButton>
  </Flex>
);

export default SidepanelTitle;
