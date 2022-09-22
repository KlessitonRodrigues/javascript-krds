import { Box, Typography } from '@mui/material';

import styles from './style';
import NotesFolder from './NotesFiles';

const Notes = () => {
  return (
    <Box style={styles.NotesGrid}>
      <Box style={styles.NotesGridItem()}>
        <Typography variant="h4">Files</Typography>
        <NotesFolder />
      </Box>
      <Box style={styles.NotesGridItem()}>
        <Typography variant="h4">Edit</Typography>
      </Box>
    </Box>
  );
};

export default Notes;
