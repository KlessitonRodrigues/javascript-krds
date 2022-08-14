import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

export const navigation = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    paddingRight: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: `1px 1px 4px ${palette.dark}22`,
  };
};
