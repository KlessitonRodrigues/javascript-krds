import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { BsCalendarDate } from "react-icons/bs";

import usePaletteContext from "../../hooks/usePalette";
import Flex from "../Templates/Flex";

const Header = () => {
  const palette = usePaletteContext();

  return (
    <Paper elevation={3}>
      <Box px={2} py={3} bgcolor={palette.blue2} color={palette.white}>
        <Flex x="flex-start">
          <BsCalendarDate fontSize="1.75rem" />
          <Typography variant="h2">&nbsp;Todo App</Typography>
        </Flex>
      </Box>
    </Paper>
  );
};

export default Header;
