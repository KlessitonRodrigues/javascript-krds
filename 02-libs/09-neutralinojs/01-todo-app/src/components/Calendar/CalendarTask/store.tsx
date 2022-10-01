import { IconButton, Tooltip } from '@mui/material';
import { BsFillPlayFill, BsPlay, BsCheck, BsX } from 'react-icons/bs';
import { CalendarTodo } from '../../../data/api/event/types';

export const getTaskIcon = (type?: CalendarTodo['status']) => {
  switch (type) {
    case 'todo':
      return (
        <Tooltip title="Todo" placement="left">
          <IconButton style={{ padding: '0' }}>
            <BsPlay fontSize="1rem" />
          </IconButton>
        </Tooltip>
      );
    case 'doing':
      return (
        <Tooltip title="Doing" placement="left">
          <IconButton style={{ padding: '0' }}>
            <BsFillPlayFill fontSize="1rem" />
          </IconButton>
        </Tooltip>
      );
    case 'done':
      return (
        <Tooltip title="Done" placement="left">
          <IconButton style={{ padding: '0' }}>
            <BsCheck fontSize="1rem" />
          </IconButton>
        </Tooltip>
      );

    case 'canceled':
      return (
        <Tooltip title="Canceled" placement="left">
          <IconButton style={{ padding: '0' }}>
            <BsX fontSize="1rem" />
          </IconButton>
        </Tooltip>
      );
    default:
      return (
        <Tooltip title="Todo" placement="left">
          <IconButton style={{ padding: '0' }}>
            <BsPlay fontSize="1rem" />
          </IconButton>
        </Tooltip>
      );
  }
};
