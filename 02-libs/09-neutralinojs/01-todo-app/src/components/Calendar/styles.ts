import { CSSProperties } from 'react';

class Styles {
  calendarGrid: CSSProperties = {
    display: 'grid',
    alignContent: 'stretch',
    gridTemplateColumns: 'repeat(7, 1fr)',
    rowGap: '0.5rem',
    columnGap: '0.5rem',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    textAlign: 'center',
  };
}

export default new Styles();
