import { ThemeProvider } from "@material-ui/core";

import Hearder from "./components/Header";
import Body from "./components/Body";
import View from "./components/View";
import theme from "./theme";
import Navigation from "./components/Navigation";
import { GlobalProvider } from "./hooks/useGlobalContext";

const App = () => (
  <>
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <View>
          <Hearder />
          <Navigation />
          <Body>TEST</Body>
        </View>
      </ThemeProvider>
    </GlobalProvider>
  </>
);

export default App;
