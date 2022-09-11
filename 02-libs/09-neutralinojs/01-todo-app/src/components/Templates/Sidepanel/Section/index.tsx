import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { section, title } from '../styles';

type Props = {
  title: string;
  children: ReactNode;
};

const SidepanelSection = (props: Props) => (
  <Box style={section()} pt={4}>
    <Box style={title()}>
      <Typography variant="h5" fontWeight="normal">
        {props.title}
      </Typography>
    </Box>
    <Box px={2}>{props.children}</Box>
  </Box>
);

export default SidepanelSection;
