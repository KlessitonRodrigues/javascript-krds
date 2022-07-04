import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Box>
    HOME PAGE
    <Link to="/folders">folders</Link>
  </Box>
);

export default HomePage;
