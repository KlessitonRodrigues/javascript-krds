import { CSSProperties } from "react";
import { Box, Breadcrumbs, IconButton, Tooltip } from "@material-ui/core";
import { BsBrightnessHigh, BsGear, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import If from "../Templates/If";

export const flexBetweenStyle: CSSProperties = {
  padding: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Navigation = () => {
  const [global, setGlobal] = useGlobalContext();

  const toggleTheme = () =>
    setGlobal({ ...global, darkTheme: !global.darkTheme });

  const toggleSettingsOpen = () =>
    setGlobal({ ...global, settingsOpen: !global.settingsOpen });

  return (
    <Box style={flexBetweenStyle}>
      <Breadcrumbs separator="-"></Breadcrumbs>

      <div>
        <Tooltip title="theme">
          <IconButton size="small" onClick={toggleTheme}>
            <BsBrightnessHigh />
          </IconButton>
        </Tooltip>
        <Tooltip title="settings" onClick={toggleSettingsOpen}>
          <IconButton size="small">
            <If value={global.settingsOpen} true={<BsX />} false={<BsGear />} />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default Navigation;
