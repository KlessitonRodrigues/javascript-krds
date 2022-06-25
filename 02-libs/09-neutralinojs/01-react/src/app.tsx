import { ThemeProvider } from "@material-ui/core";
import Hearder from "./components/header";
import theme from "./theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Hearder />
    </ThemeProvider>
  </>
);

export default App;
