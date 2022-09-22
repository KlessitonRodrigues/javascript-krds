import { CSSProperties } from 'react';
import usePaletteContext from '../../hooks/usePaletteContext';

class Styles {
  NotesGrid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '2fr 8fr',
    columnGap: '0.5rem',
    height: '90vh',
  };

  NotesGridItem(): CSSProperties {
    const palette = usePaletteContext();
    return {
      borderRadius: '0.25rem',
      padding: '1rem',
      boxShadow: '1px 1px 6px #2222',
    };
  }
}

export default new Styles();
