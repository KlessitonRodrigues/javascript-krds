import { Box, Breadcrumbs, IconButton, Link, Tooltip } from "@material-ui/core";
import { BsBrightnessHigh, BsChevronRight, BsGear } from "react-icons/bs";
import useGlobalContext from "../../hooks/useGlobalContext";

import { flexBetweenStyle } from "../../theme/propStyles";
import If from "../Templates/If";

const Navigation = () => {
  const [global, setGlobal] = useGlobalContext();

  const toggleTheme = () =>
    setGlobal({ ...global, darkTheme: !global.darkTheme });

  return (
    <Box style={flexBetweenStyle}>
      <Breadcrumbs separator={<BsChevronRight />}>
        <Link>Home</Link>
        <Link>Today</Link>
        <Link underline="none">Finances</Link>
      </Breadcrumbs>

      <div>
        <Tooltip title="theme">
          <IconButton size="small" onClick={toggleTheme}>
            <If
              value={!global.darkTheme}
              true={<BsBrightnessHigh />}
              false={<BsBrightnessHigh color="#fff" />}
            />
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
