import { CSSProperties } from "react";
import { Box, Breadcrumbs, IconButton, Link, Tooltip } from "@material-ui/core";
import { BsBrightnessHigh, BsChevronRight, BsGear } from "react-icons/bs";

import useGlobalContext from "../../hooks/useGlobalContext";

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

  return (
    <Box style={flexBetweenStyle}>
      <Breadcrumbs separator={<BsChevronRight />}>
        <Link>Home</Link>
        <Link>Today</Link>
        <Link color="inherit">Finances</Link>
      </Breadcrumbs>

      <div>
        <Tooltip title="theme">
          <IconButton size="small" onClick={toggleTheme}>
            <BsBrightnessHigh />
          </IconButton>
        </Tooltip>
        <Tooltip title="settigs">
          <IconButton size="small">
            <BsGear />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};

export default Navigation;
