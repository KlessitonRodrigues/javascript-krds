import { CSSProperties } from 'react';
import usePaletteContext from '../../../../hooks/usePaletteContext';

class Styles {
  container: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0',
  };

  icon(): CSSProperties {
    const palette = usePaletteContext();
    return {
      fontSize: '2rem',
      color: palette.colorA,
    };
  }
}

export default new Styles();
