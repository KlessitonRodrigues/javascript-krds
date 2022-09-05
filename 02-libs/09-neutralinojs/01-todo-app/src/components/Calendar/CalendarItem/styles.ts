import { CSSProperties } from 'react';
import usePaletteContext from '../../../hooks/usePaletteContext';

export type DayBoxStyles = 'base' | 'day' | 'day-out-of-month' | 'header';
export const dayBoxStyles = (boxStyle: DayBoxStyles) => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    padding: '0.5rem',
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
      color: palette.color4,
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

type CalendarItemFloat = 'topLeft' | 'bottomLeft' | 'topRight';
export const calendarItemFloat = (position: CalendarItemFloat, dayStyle: DayBoxStyles): CSSProperties => {
  const palette = usePaletteContext();
  const base: CSSProperties = {
    position: 'absolute',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    overflow: 'hidden',
  };

  const styles: Record<CalendarItemFloat, CSSProperties> = {
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
      backgroundColor: dayStyle === 'day' ? palette.color1 + 'bb' : palette.color6 + '66',
      color: palette.color4,
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
  padding: '1.25rem 0 0.75rem 0',
  textAlign: 'left',
};
