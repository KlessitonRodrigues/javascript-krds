import React from "react";
import Button from "@material-ui/core/Button";
import Stack from "@material-ui/core/Stack";
import Container from "@material-ui/core/Container";

const TranslateBtns = () => (
  <Container >
    <Stack spacing={1} direction="row">
      <Button variant="contained" color="primary">
        Traduzir
      </Button>
      <Button variant="outlined" color="primary">
        Inverter idiomas
      </Button>
    </Stack>
  </Container>
);

export default TranslateBtns;
