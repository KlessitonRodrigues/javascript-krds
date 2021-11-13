import React from "react";
import Routes from "./routes";
import { GlobalProvider } from "./providers/global/index";

export default class App extends React.Component {
  render() {
    return (
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    );
  }
}
