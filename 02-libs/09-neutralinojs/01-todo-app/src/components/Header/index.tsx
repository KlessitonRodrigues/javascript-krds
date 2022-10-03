import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import useAnimations from '../../hooks/useAnimations';

import { headerExpanded, headerStyle } from './styles';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const headerAnimation = useAnimations(['fadeInDown']);

  const headerEvents = {
    onMouseEnter: () => {
      headerAnimation.play({ duration: '0.5s' });
      setExpanded(!expanded);
    },
    onMouseLeave: () => setExpanded(!expanded),
  };

  return (
    <Box {...headerEvents} style={headerStyle(expanded)}>
      <BsCalendarDate fontSize="1.75rem" />
      <Box style={headerExpanded(expanded)} ref={headerAnimation.elRef}>
        <Typography variant="h2">&nbsp;Todo App</Typography>
      </Box>
    </Box>
  );
};

export default Header;
