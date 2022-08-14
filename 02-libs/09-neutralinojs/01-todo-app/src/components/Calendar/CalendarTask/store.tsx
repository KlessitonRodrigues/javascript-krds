import { BsSquare, BsCaretRightSquare, BsCheckSquare, BsClock } from 'react-icons/bs';

export const getTaskIcon = (type?: 'todo' | 'progess' | 'done') => {
  switch (type) {
    case 'todo':
      return <BsClock fontSize="0.75rem" />;
    case 'progess':
      return <BsCaretRightSquare fontSize="0.75rem" />;
    case 'done':
      return <BsCheckSquare fontSize="0.75rem" />;
    default:
      return <BsSquare fontSize="0.75rem" />;
  }
};
