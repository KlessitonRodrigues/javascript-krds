import Box from '@mui/material/Box'
import { BsSquare, BsCaretRightSquare, BsCheckSquare } from 'react-icons/bs'
import usePaletteContext from '../../../hooks/usePalette'

import { calendarTask } from '../styles'

const getTaskIcon = (type?: 'todo' | 'progess' | 'done') => {
  switch (type) {
    case 'todo':
      return <BsSquare fontSize="0.75rem" />
    case 'progess':
      return <BsCaretRightSquare fontSize="0.75rem" />
    case 'done':
      return <BsCheckSquare fontSize="0.75rem" />
    default:
      return <BsSquare fontSize="0.75rem" />
  }
}

const CalendarTask = () => {
  const palette = usePaletteContext()

  return (
    <Box style={calendarTask} color={palette.gray}>
      <Box>
        {getTaskIcon('todo')}
        &nbsp; Study English
      </Box>
    </Box>
  )
}

export default CalendarTask
