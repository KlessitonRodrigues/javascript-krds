import { Box } from '@mui/material'

import { calendarHeader } from '../styles'

const CalendarHeader = () => {
  return <Box style={calendarHeader()}>{new Date().toLocaleString('pt-BR')}</Box>
}

export default CalendarHeader
