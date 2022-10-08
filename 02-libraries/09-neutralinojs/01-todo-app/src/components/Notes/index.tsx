import { Box, Typography } from '@mui/material';

import styles from './style';
import NotesFolder from './NotesFiles';
import { BsFolder, BsPen } from 'react-icons/bs';
import Flex from '../Templates/Flex';

const Notes = () => {
  return (
    <Box style={styles.NotesGrid}>
      <Box style={styles.NotesGridItem()}>
        <Flex xContent="start" styles={styles.NoteTitle()}>
          <BsFolder fontSize="1.2rem" /> &nbsp;
          <Typography variant="h5">Folders</Typography>
        </Flex>
        <NotesFolder />
      </Box>
      <Box style={styles.NotesGridItem()}>
        <Flex xContent="start" styles={styles.NoteTitle()}>
          <BsPen fontSize="1.2rem" /> &nbsp;
          <Typography variant="h5">Edit</Typography>
        </Flex>
      </Box>
    </Box>
  );
};

export default Notes;
