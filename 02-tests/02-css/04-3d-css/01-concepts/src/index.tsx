import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./styles/global";
import Home from "./components/pages/Home";

const App = () => (
  <>
    <GlobalStyles />
    <Home />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
