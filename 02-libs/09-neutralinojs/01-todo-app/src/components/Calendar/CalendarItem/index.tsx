import { Box, Grow } from '@mui/material';

import * as styles from './styles';

export type Props = {
  data: {
    styleType: styles.DayBoxStyles;
    name?: string;
    topLeft?: any;
    bottomLeft?: any;
    topRight?: any;
    content?: any;
  };
};

const classByType = (type: styles.DayBoxStyles) => {
  if (type === 'header') return 'color1-bg-hover';
  if (type === 'day') return 'color1-border-hover color1-shadow-hover';
};

const CalendarItem = ({ data }: Props) => {
  return (
      <Box style={styles.dayBoxStyles(data.styleType)} className={classByType(data.styleType)}>
        <Box style={data.styleType === 'day' ? styles.calendarItemContent : {}}>{data.content || data.name}</Box>
        <Box style={styles.calendarItemFloat('topLeft')}>{data.topLeft}</Box>
        <Box style={styles.calendarItemFloat('bottomLeft')}>{data.bottomLeft}</Box>
        <Box style={styles.calendarItemFloat('topRight')}>{data.topRight}</Box>
      </Box>
  );
};

export default CalendarItem;
