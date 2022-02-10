import React from "react";

import SearchField from "./components/searchField";
import TranslateBtns from './components/translateBtnsField'
import { Container } from "./styled";

const App = () => (
  <Container>
    <SearchField />
    <TranslateBtns />
  </Container>
);

export default App;
