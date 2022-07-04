import { Box, Typography } from "@material-ui/core";
import { BsClock } from "react-icons/bs";
import Flex from "../Templates/flex";

const Header = () => (
  <Box p={2} bgcolor="primary.600" color="#fff" margin={0}>
    <Flex x="flex-start">
      <BsClock fontSize="2rem" />
      <Typography variant="h1">&nbsp;Todo App</Typography>
    </Flex>
  </Box>
);

export default Header;
