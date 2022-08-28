import { CSSProperties } from 'react';
import usePaletteContext from '../../../hooks/usePaletteContext';

export const sidepanelOpen = (isOpen: boolean): CSSProperties => {
  const palette = usePaletteContext();

  const base: CSSProperties = {
    backgroundColor: palette.bgLight,
    position: 'fixed',
    right: '0px',
    bottom: '0px',
    height: '85vh',
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

export const sidepanelSection = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    color: palette.color1Dark,
  };
};

export const sidepanelSectionHr = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    borderStyle: 'solid',
    borderColor: palette.color1Dark + '44',
    margin: '0 0 0.25rem',
  };
};
