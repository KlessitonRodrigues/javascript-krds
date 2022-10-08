import React from "react";
import TextField from "@material-ui/core/TextField";

import { Container } from "./styled";

const SearchField = () => {
  return (
    <Container>
      <TextField color="primary" multiline rows="5" fullWidth/>
    </Container>
  );
};

export default SearchField;
