import { ThemeProvider } from "@material-ui/core";

import Hearder from "./components/header";
import Body from "./components/body";
import View from "./components/view";
import theme from "./theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <View>
        <Hearder />
        <Body>TEST</Body>
      </View>
    </ThemeProvider>
  </>
);

export default App;
