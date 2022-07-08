import { Box, IconButton, Tab, Tabs, Tooltip } from "@mui/material";
import {
  BsBrightnessHigh,
  BsGear,
  BsX,
  BsCalendar3,
  BsFileText,
  BsTags,
} from "react-icons/bs";
import { useLocation } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import If from "../Templates/If";
import { flexBetweenStyle } from "./styles";

const Navigation = () => {
  const [global, setGlobal] = useGlobalContext();

  const toggleTheme = () =>
    setGlobal({ ...global, darkTheme: !global.darkTheme });
  const toggleSettingsOpen = () =>
    setGlobal({
      ...global,
      sidePanel: { ...global.sidePanel, settings: !global.sidePanel.settings },
    });
  const toggleTagsOpen = () =>
    setGlobal({
      ...global,
      sidePanel: { ...global.sidePanel, tags: !global.sidePanel.tags },
    });
    
  const url = useLocation();

  return (
    <Box style={flexBetweenStyle}>
      <Tabs value={url.pathname}>
        <Tab
          icon={<BsCalendar3 fontSize="1.25rem" />}
          iconPosition="start"
          label="Calendar"
          value="/"
        />
        <Tab
          icon={<BsFileText fontSize="1.25rem" />}
          iconPosition="start"
          label="Notes"
          value="/folders"
        />
      </Tabs>

      <div>
        <Tooltip title="theme">
          <IconButton onClick={toggleTheme}>
            <BsBrightnessHigh />
          </IconButton>
        </Tooltip>
        <Tooltip title="tags">
          <IconButton onClick={toggleTagsOpen}>
            <If
              value={global.sidePanel.tags}
              true={<BsX />}
              false={<BsTags />}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="settings" onClick={toggleSettingsOpen}>
          <IconButton>
            <If
              value={global.sidePanel.settings}
              true={<BsX />}
              false={<BsGear />}
            />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default Navigation;
