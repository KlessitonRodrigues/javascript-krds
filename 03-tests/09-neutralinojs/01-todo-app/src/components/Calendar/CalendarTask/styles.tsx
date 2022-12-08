import { CSSProperties } from 'react';
import { CalendarTodo } from '../../../data/api/event/types';
import usePaletteContext from '../../../hooks/usePaletteContext';

class Styles {
  calendarTask = (status: CalendarTodo['status']): CSSProperties => {
    const palette = usePaletteContext();
    const styles: CSSProperties = {
      fontSize: '0.8rem',
      cursor: 'pointer',
      borderBottom: '1px solid #2221',
      padding: '0.25rem 0',
    };

    if (status === 'canceled') {
      return {
        ...styles,
        color: palette.dark + '66',
      };
    }

    if (status === 'todo') {
      return {
        ...styles,
        color: palette.dark + 'AA',
      };
    }
    if (status === 'doing') {
      return {
        ...styles,
        color: palette.colorA,
      };
    }
    if (status === 'done') {
      return {
        ...styles,
        color: palette.green,
      };
    }
  };
}

export default new Styles();
