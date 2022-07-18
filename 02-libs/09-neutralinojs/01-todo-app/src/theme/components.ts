import { ThemeOptions } from '@mui/material'

export const components: ThemeOptions['components'] = {
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
      },
    },
  },
}
