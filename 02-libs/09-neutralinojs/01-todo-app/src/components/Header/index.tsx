import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { BsCalendarDate } from 'react-icons/bs'

import usePaletteContext from '../../hooks/usePaletteContext'
import Flex from '../Templates/Flex'

const Header = () => {
  const palette = usePaletteContext()

  return (
    <Paper elevation={3}>
      <Box px={2} py={3} bgcolor={palette.color1Dark} color={palette.color4}>
        <Flex xContent="flex-start">
          <BsCalendarDate fontSize="1.75rem" />
          <Typography variant="h2">&nbsp;Todo App</Typography>
        </Flex>
      </Box>
    </Paper>
  )
}

export default Header
