import { CSSProperties } from 'react';
import usePaletteContext from '../../../../hooks/usePaletteContext';

class Styles {
  container: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0',
    border: '1px solid transparent',
    padding: '0 0.5rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
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
