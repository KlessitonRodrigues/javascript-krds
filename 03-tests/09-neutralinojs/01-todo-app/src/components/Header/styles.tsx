import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

export const headerStyle = (expanded: boolean): CSSProperties => {
  const palette = usePaletteContext();

  return {
    backgroundColor: palette.colorADark,
    color: palette.white,
    position: 'absolute',
    padding: '0.5rem',
    width: !expanded ? '2rem' : '100%',
    height: '2rem',
    zIndex: 1,
    borderRadius: !expanded && '0 0 0.75rem 0',
    cursor: 'pointer',
    transition: 'width 0.4s',
    display: 'flex',
  };
};

export const headerExpanded = (expanded: boolean): CSSProperties => {
  return {
    display: !expanded ? 'none' : 'block',
    opacity: expanded ? '1' : '0',
  };
};
