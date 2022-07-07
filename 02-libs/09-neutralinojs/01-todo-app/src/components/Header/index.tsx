import { Box, Typography } from "@mui/material";
import { BsCalendarDate } from "react-icons/bs";
import Flex from "../Templates/Flex";

const Header = () => (
  <Box px={2} py={3} bgcolor="primary.700" color="#fff">
    <Flex x="flex-start">
      <BsCalendarDate fontSize="1.75rem" />
      <Typography variant="h2">&nbsp;Todo App</Typography>
    </Flex>
  </Box>
);

export default Header;
