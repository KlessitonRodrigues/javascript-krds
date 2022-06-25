import { Box, Paper, Typography } from "@material-ui/core";

const Header = () => (
  <Paper elevation={3}>
    <Box p={2} bgcolor="primary.500" color="text.primary">
      <Typography variant="h1">Title</Typography>
    </Box>
  </Paper>
);

export default Header;
