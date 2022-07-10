import Box from '@mui/material/Box'

import weekdaysNames from '../../assets/json/weekdays.json'

import CalendarItem, { Props as CalendarItemProps } from './CalendarItem'
import CalendarTask from './CalendarTask'
import TagItem from '../Tags/TagItem'
import { calendarGrid } from './styles'

const weekdays = weekdaysNames
const week1 = ['CARD', 'CARD', 'CARD', 'CARD', 'CARD', 'CARD', 'CARD']

const dayBoxes = weekdays.map((name, i) => {
  const data: CalendarItemProps['data'] = {
    name,
    styleType: 'header',
  }

  return <CalendarItem data={data} key={'header' + i} />
})

const weekBoxes = week1.map((name, i) => {
  const data: CalendarItemProps['data'] = {
    name,
    styleType: 'day',
    topLeft: 1,
    bottomLeft: [<TagItem label="#study" />, <TagItem label="#remider" />],
    topRight: 'Tasks 3/12',
    content: [<CalendarTask />, <CalendarTask />, <CalendarTask />, <CalendarTask />, <CalendarTask />],
  }

  return <CalendarItem data={data} key={'day' + i} />
})

const Calendar = () => {
  return (
    <Box>
      <Box style={calendarGrid}>
        {dayBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
      </Box>
    </Box>
  )
}

export default Calendar
