import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

export const viewStyles = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    backgroundColor: palette.bgLight,
    color: palette.dark,
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    transition: '0.2s background-color linear',
  };
};
