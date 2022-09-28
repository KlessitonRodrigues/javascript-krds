import { BsFillPlayFill, BsPlay, BsCheck, BsX } from 'react-icons/bs';
import { CalendarTodo } from '../../../data/api/event/types';

export const getTaskIcon = (type?: CalendarTodo['status']) => {
  switch (type) {
    case 'todo':
      return <BsPlay fontSize="1.2rem" />;
    case 'doing':
      return <BsFillPlayFill fontSize="1.2rem" />;
    case 'done':
      return <BsCheck fontSize="1.2rem" />;
    case 'canceled':
      return <BsX fontSize="1.2rem" />;
    default:
      return <BsPlay fontSize="1.2rem" />;
  }
};
