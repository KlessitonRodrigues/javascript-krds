import { Box } from '@mui/material';

import * as styles from './styles';
import * as store from './store';
import * as types from './types';
import If from '../../Templates/If';
import useAnimations from '../../../hooks/useAnimations';
import { useEffect } from 'react';

const CalendarItem = ({ data }: types.Props) => {
  const animations = useAnimations(['fadeIn']);

  useEffect(() => {
    animations.play({
      duration: '0.3s',
      afterAnimationStyles: {
        opacity: 1,
      },
    });
  }, [data.topLeft]);

  return (
    <Box
      style={styles.dayBoxStyles(data.styleType)}
      className={store.classByType(data.styleType)}
      ref={animations.elRef}
    >
      <Box style={styles.calendarItemContent}>{data.content || data.name}</Box>
      <If
        value={data.topLeft}
        true={<Box style={styles.calendarItemFloat('topLeft', data.styleType)}>{data.topLeft}</Box>}
      />
      <Box style={styles.calendarItemFloat('bottomLeft', data.styleType)}>{data.bottomLeft}</Box>
    </Box>
  );
};

export default CalendarItem;
