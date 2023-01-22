import { useEffect } from 'react';
import { Box } from '@mui/material';

import * as styles from './styles';
import * as store from './store';
import * as types from './types';
import If from '../../Templates/If';
import useAnimations from '../../../hooks/useAnimations';
import useGlobalContext from '../../../hooks/useGlobalContext';

const CalendarItem = ({ data, expanded, weekOfMonth }: types.Props) => {
  const [global, setGlobal] = useGlobalContext();
  const animations = useAnimations(['fadeUp', 'fadeIn']);
  const isWeekSelected = weekOfMonth === global.currentWeek;

  useEffect(() => {
    if (isWeekSelected) {
      animations.play({
        animationIndex: 1,
        duration: '0.5s',
        afterAnimationStyles: {
          opacity: 1,
        },
      });
    } else {
      animations.play({
        duration: '0.4s',
        afterAnimationStyles: {
          opacity: 1,
        },
      });
    }
  }, [isWeekSelected, data.topLeft]);

  return (
    <Box
      style={styles.dayBoxStyles(data.styleType)}
      className={store.classByType(data.styleType)}
      ref={animations.elRef}
      onClick={() => setGlobal({ ...global, currentWeek: weekOfMonth })}
    >
      <Box style={styles.calendarItemContent}>
        <If value={isWeekSelected || expanded} true={data.content || data.name} />
      </Box>
      <If
        value={data.topLeft}
        true={<Box style={styles.calendarItemFloat('topLeft', data.styleType)}>{data.topLeft}</Box>}
      />
      <Box style={styles.calendarItemFloat('bottomLeft', data.styleType)}>{data.bottomLeft}</Box>
    </Box>
  );
};

export default CalendarItem;
