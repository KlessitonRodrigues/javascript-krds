import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

export const navigation = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    paddingLeft: '3.25rem',
    paddingRight: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: `1px 1px 4px ${palette.dark}22`,
  };
};
