import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Tooltip from "@mui/material/Tooltip";
import { SyntheticEvent } from "react";
import { BsBrightnessHigh, BsGear, BsX, BsCalendar3, BsFileText, BsTags, BsClipboardData } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import If from "../Templates/If";
import { flexBetweenStyle } from "./styles";

const Navigation = () => {
  const [global, setGlobal] = useGlobalContext();
  const url = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => setGlobal({ ...global, darkTheme: !global.darkTheme });

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

  const handleTabsOnChange = (event: SyntheticEvent, path: string) => navigate(path);

  return (
    <Box style={flexBetweenStyle} mb={1}>
      <Tabs value={url.pathname} onChange={handleTabsOnChange}>
        <Tab icon={<BsCalendar3 fontSize="1.75rem" />} iconPosition="start" label="Calendar" value="/" />
        <Tab icon={<BsFileText fontSize="1.75rem" />} iconPosition="start" label="Notes" value="/folders" />
        <Tab icon={<BsClipboardData fontSize="1.75rem" />} iconPosition="start" label="Board" value="/board" />
      </Tabs>

      <div>
        <Tooltip title="Theme">
          <IconButton onClick={toggleTheme}>
            <BsBrightnessHigh />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tags">
          <IconButton onClick={toggleTagsOpen}>
            <If value={global.sidePanel.tags} true={<BsX />} false={<BsTags />} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings" onClick={toggleSettingsOpen}>
          <IconButton>
            <If value={global.sidePanel.settings} true={<BsX />} false={<BsGear />} />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default Navigation;
