import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsCalendarDate } from 'react-icons/bs';

import usePaletteContext from '../../hooks/usePaletteContext';
import Flex from '../Templates/Flex';

const Header = () => {
  const palette = usePaletteContext();

  return (
    <Box px={1.5} py={1.5} bgcolor={palette.color1Dark} color={palette.color4}>
      <Flex xContent="flex-start">
        <BsCalendarDate fontSize="1.75rem" />
        <Typography variant="h2">&nbsp;Todo App</Typography>
      </Flex>
    </Box>
  );
};

export default Header;
