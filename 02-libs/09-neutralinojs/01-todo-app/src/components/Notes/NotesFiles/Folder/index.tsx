import { Box } from '@mui/material';
import { CSSProperties, MouseEvent } from 'react';
import { BsFillFolderFill } from 'react-icons/bs';

import styles from './style';

const NotesFolder = () => {
  const mouse = {
    enter: (event: MouseEvent<HTMLDivElement>) => {
      const el = event.target;
    },
  };

  return (
    <Box style={styles.container} onMouseEnter={mouse.enter}>
      <BsFillFolderFill style={styles.icon()} />
      &nbsp; My2
    </Box>
  );
};

export default NotesFolder;
