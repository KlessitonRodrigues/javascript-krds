import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

import usePaletteContext from '../../hooks/usePaletteContext';
import useGlobalCSS from '../../hooks/useGlobalCSS';
import theme from '../../muiTheme';
import { viewStyles } from './styles';

const View = (props: PropsWithChildren) => {
  const palette = usePaletteContext();
  useGlobalCSS();

  return (
    <Box style={viewStyles} color={palette.dark} bgcolor={palette.bgLight}>
      <ThemeProvider theme={theme(palette)}>{props.children}</ThemeProvider>
    </Box>
  );
};

export default View;
