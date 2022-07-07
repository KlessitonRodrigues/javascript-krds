import { Box } from "@mui/material";

import { homePage } from "./styles";
import Calendar from "../../components/Calendar";

const HomePage = () => {
  return (
    <Box style={homePage}>
      <Calendar />
    </Box>
  );
};

export default HomePage;
