import { Box } from '@mui/material';

import * as styles from './styles';
import * as store from './store';
import * as types from './types';

import useAnimations from '../../../hooks/useAnimations';
import { useEffect } from 'react';

const CalendarItem = ({ data }: types.Props) => {
  const itemAnimation = useAnimations(['fadeInLeft']);

  useEffect(() => {
    itemAnimation.play(0, { duration: '0.5s', delay: data.animationDelay, fill: 'backwards' });
  }, [data]);

  return (
    <Box
      ref={itemAnimation.elRef}
      style={styles.dayBoxStyles(data.styleType)}
      className={store.classByType(data.styleType)}
    >
      <Box style={styles.calendarItemContent}>{data.content || data.name}</Box>
      <Box style={styles.calendarItemFloat('topLeft', data.styleType)}>{data.topLeft}</Box>
      <Box style={styles.calendarItemFloat('bottomLeft', data.styleType)}>{data.bottomLeft}</Box>
      <Box style={styles.calendarItemFloat('topRight', data.styleType)}>{data.topRight}</Box>
    </Box>
  );
};

export default CalendarItem;
