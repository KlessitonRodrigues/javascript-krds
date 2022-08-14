import Typography from '@mui/material/Typography';
import { BsGear } from 'react-icons/bs';

import useGlobalContext from '../../hooks/useGlobalContext';
import Sidepanel from '../Templates/Sidepanel';
import { flexCenter } from './styles';

const Tags = () => {
  const [global] = useGlobalContext();

  return (
    <Sidepanel show={global.sidePanel.tags}>
      <div style={flexCenter}>
        <BsGear fontSize="1.5rem" />
        <Typography variant="h2">&nbsp; Tags</Typography>
      </div>
    </Sidepanel>
  );
};

export default Tags;
