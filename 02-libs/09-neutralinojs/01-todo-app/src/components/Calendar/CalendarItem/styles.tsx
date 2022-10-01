import { CSSProperties } from 'react';

import { ItemFloat, BoxStyles } from './types';
import usePaletteContext from '../../../hooks/usePaletteContext';

export const dayBoxStyles = (boxStyle: BoxStyles) => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    padding: '0.25rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '1px 1px 6px 1px #4442',
    overflow: 'hidden',
    borderRadius: '0.45rem',
    userSelect: 'none',
  };

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      height: '1.5rem',
      color: palette.white,
      fontWeight: 'bold',
    },
    day: {
      ...base,
      border: '1px solid' + palette.border,
      minHeight: '6rem',
    },
    'day-out-of-month': {
      ...base,
      border: '1px solid' + palette.border,
      minHeight: '6rem',
    },
  };

  return styles[boxStyle];
};

export const calendarItemFloat = (position: ItemFloat, dayStyle: BoxStyles): CSSProperties => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    position: 'absolute',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    overflow: 'hidden',
  };

  const styles: Record<ItemFloat, CSSProperties> = {
    bottomLeft: {
      ...base,
      bottom: '0',
      left: '0',
      borderRadius: '0',
      maxWidth: '80%',
    },
    topLeft: {
      ...base,
      top: '0',
      left: '0',
      fontWeight: 'bold',
      backgroundColor: dayStyle === 'day' ? palette.colorA + 'BB' : palette.gray,
      color: palette.white,
      borderRadius: '0 0 0.5rem 0',
    },
    topRight: {
      ...base,
      top: '0',
      right: '0',
      borderRadius: '0',
      color: palette.dark,
    },
  };

  return styles[position];
};

export const calendarItemContent: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '1rem 0',
  textAlign: 'left',
  maxHeight: '5rem',
  overflowY: 'auto',
  margin: '0.5rem 0 1rem',
};
