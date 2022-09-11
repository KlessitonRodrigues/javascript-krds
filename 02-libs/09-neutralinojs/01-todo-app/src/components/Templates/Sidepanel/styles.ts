import { CSSProperties } from 'react';
import usePaletteContext from '../../../hooks/usePaletteContext';

export const sidepanelOpen = (isOpen: boolean): CSSProperties => {
  const palette = usePaletteContext();

  const base: CSSProperties = {
    backgroundColor: palette.bgLight,
    position: 'fixed',
    right: '0px',
    bottom: '0px',
    height: '55rem',
    boxShadow: '0 0 6px 100vw #4443',
    //transitionProperty: 'right',
    transitionDuration: '0.3s',
    zIndex: 10,
    border: '1px solid ' + palette.border,
    opacity: '1',
    borderRadius: '0.5rem',
  };

  if (isOpen) return base;

  return {
    ...base,
    opacity: '0',
    visibility: 'hidden',
    right: '-100%',
  };
};

export const section = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    color: palette.colorADark,
  };
};

export const title = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    backgroundColor: palette.colorA + '19',
    color: palette.dark,
    borderRadius: '0.25rem',
    padding: '0.25rem 0.5rem',
  };
};
