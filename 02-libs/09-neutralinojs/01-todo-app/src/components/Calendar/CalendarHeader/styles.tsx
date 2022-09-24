import { CSSProperties } from 'react';
import usePaletteContext from '../../../hooks/usePaletteContext';

class Styles {
  calendarHeader = (): CSSProperties => {
    const palette = usePaletteContext();
    return {
      userSelect: 'none',
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: palette.colorADark,
    };
  };
}

export default new Styles();
