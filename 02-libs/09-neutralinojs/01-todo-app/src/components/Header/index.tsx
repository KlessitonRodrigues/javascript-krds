import { Box, Typography } from "@mui/material";
import { BsClock } from "react-icons/bs";
import Flex from "../Templates/Flex";

const Header = () => (
  <Box p={2} bgcolor="primary.600" color="#fff" margin={0}>
    <Flex x="flex-start">
      <BsClock fontSize="2rem" />
      <Typography variant="h1">&nbsp;Todo App</Typography>
    </Flex>
  </Box>
);

export default Header;
