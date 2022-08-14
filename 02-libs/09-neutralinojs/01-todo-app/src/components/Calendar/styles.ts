import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

export const calendarGrid: CSSProperties = {
  display: 'grid',
  alignContent: 'stretch',
  gridTemplateColumns: 'repeat(7, 1fr)',
  rowGap: '0.5rem',
  columnGap: '0.5rem',
  justifyItems: 'stretch',
  alignItems: 'center',
  textAlign: 'center',
};

export const calendarHeader = (): CSSProperties => {
  const palette = usePaletteContext();
  return {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: palette.color1,
  };
};

export const calendarEvent = (): CSSProperties => {
  return {};
};
