import { Box, IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { SyntheticEvent } from 'react';
import * as bsIcon from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

import useGlobalContext from '../../hooks/useGlobalContext';
import Flex from '../Templates/Flex';
import If from '../Templates/If';
import { navigation } from './styles';
import * as store from './store';

const Navigation = () => {
  const [global, setGlobal] = useGlobalContext();
  const url = useLocation();
  const navigate = useNavigate();

  const handleTabsOnChange = (event: SyntheticEvent, path: string) => navigate(path);

  return (
    <Box style={navigation()}>
      <Tabs value={url.pathname} onChange={handleTabsOnChange}>
        <Tab
          icon={<bsIcon.BsCalendar2Week fontSize="1.25rem" />}
          iconPosition="start"
          label="Calendar"
          value="/"
        />
        <Tab
          icon={<bsIcon.BsFileText fontSize="1.25rem" />}
          iconPosition="start"
          label="Notes"
          value="/folders"
        />
        <Tab
          icon={<bsIcon.BsClipboardData fontSize="1.25rem" />}
          iconPosition="start"
          label="Board"
          value="/board"
        />
      </Tabs>

      <Flex>
        <Tooltip title="Theme">
          <IconButton onClick={() => setGlobal(store.toggleTheme(global))}>
            <bsIcon.BsBrightnessHigh />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tags">
          <IconButton onClick={() => setGlobal(store.toggleTagsOpen(global))}>
            <If value={global.sidePanel.tags} true={<bsIcon.BsX />} false={<bsIcon.BsTags />} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings" onClick={() => setGlobal(store.toggleSettingsOpen(global))}>
          <IconButton>
            <If value={global.sidePanel.settings} true={<bsIcon.BsX />} false={<bsIcon.BsGear />} />
          </IconButton>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Navigation;
