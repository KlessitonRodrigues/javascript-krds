import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

import { sidepanelSection, sidepanelSectionHr } from '../styles';

type Props = {
  title: string;
  children: ReactNode;
};

const SidepanelSection = (props: Props) => (
  <Box style={sidepanelSection()} pt={5}>
    <Typography variant="h6" fontWeight="normal">
      {props.title}
    </Typography>
    <hr style={sidepanelSectionHr()} />
    {props.children}
  </Box>
);

export default SidepanelSection;
