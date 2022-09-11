import { createTheme, ThemeOptions } from '@mui/material';
import { BasePalette } from './hooks/usePaletteContext/types';

const palette = (palette: BasePalette): ThemeOptions['palette'] => ({
  common: {
    black: palette.dark,
    white: palette.light,
  },
  background: { default: palette.bgLight },
  primary: { main: palette.colorA },
  secondary: { main: palette.colorB },
  text: {
    primary: palette.dark,
    secondary: palette.dark,
  },
});

const components = (basePalette: BasePalette): ThemeOptions['components'] => {
  return {
    MuiContainer: {
      styleOverrides: { root: { padding: '0.5rem' } },
    },
    MuiLink: {
      styleOverrides: {
        underlineHover: {
          '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'unset',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0.25rem',
          cursor: 'pointer',
          color: 'unset',
        },
        sizeSmall: {
          padding: '0.25rem',
          fontSize: '1.3rem',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.9rem',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: '3rem',
          padding: '0 0.5rem',
          justifyContent: 'flex-start',
          textTransform: 'none',
          fontSize: '1.1rem',
          lineHeight: 0,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: basePalette.dark,
          fontSize: '0.9rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.4rem',
        },
      },
    },
  };
};

const typography: ThemeOptions['typography'] = {
  allVariants: {
    color: 'unset',
  },
  h1: { fontSize: '1.75rem' },
  h2: { fontSize: '1.5rem' },
  h3: { fontSize: '1.25rem' },
  h4: { fontSize: '1rem' },
  h5: { fontSize: '0.9rem' },
  h6: { fontSize: '0.8rem' },
};

const theme = (basePalette: BasePalette) =>
  createTheme({
    palette: palette(basePalette),
    components: components(basePalette),
    typography,
    spacing(factor: number) {
      return factor * 0.25 + 'rem';
    },
  });

export default theme;
