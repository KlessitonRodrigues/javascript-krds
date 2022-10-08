import { Box } from '@mui/material';
import { BsFillFolderFill } from 'react-icons/bs';

import styles from './style';

const NotesFolder = () => {
  return (
    <Box style={styles.container} className="color1-text-hover">
      <BsFillFolderFill style={styles.icon()} />
      &nbsp; My2
    </Box>
  );
};

export default NotesFolder;
