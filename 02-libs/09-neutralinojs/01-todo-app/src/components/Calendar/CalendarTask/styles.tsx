import { CSSProperties } from 'react';
import { CalendarTodo } from '../../../data/api/event/types';
import usePaletteContext from '../../../hooks/usePaletteContext';

class Styles {
  calendarTask = (status: CalendarTodo['status']): CSSProperties => {
    const palette = usePaletteContext();
    const styles = {
      fontSize: '0.85rem',
      borderRadius: '0.25rem',
      padding: '0 0.2rem',
      cursor: 'pointer',
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
