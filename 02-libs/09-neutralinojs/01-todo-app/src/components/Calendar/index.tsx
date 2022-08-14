import Box from '@mui/material/Box';

import CalendarItem, { Props as CalendarItemProps } from './CalendarItem';
import CalendarHeader from './CalendarHeader';
import CalendarTask from './CalendarTask';
import CalendarEvent from './CalendarEvent';
import TagItem from '../Tags/TagItem';
import { calendarGrid } from './styles';
import * as store from './store';

const week1 = ['CARD', 'CARD', 'CARD', 'CARD', 'CARD', 'CARD', 'CARD'];

const weekBoxes = week1.map((name, i) => {
  const data: CalendarItemProps['data'] = {
    name,
    styleType: 'day',
    topLeft: 1,
    bottomLeft: [<TagItem label="#study" />, <TagItem label="#remider" />],
    // topRight: [<TagItem label="#study" />, <TagItem label="#remider" />],
    content: [<CalendarTask />, <CalendarTask />, <CalendarTask />, <CalendarTask />],
  };

  return <CalendarItem data={data} key={'day' + i} />;
});

const Calendar = () => {
  return (
    <Box>
      <CalendarHeader />
      <CalendarEvent />
      <Box style={calendarGrid}>
        {store.renderWeekHeaders()}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
      </Box>
    </Box>
  );
};

export default Calendar;
