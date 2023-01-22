import Hearder from "./components/Header";
import Body from "./components/Body";
import View from "./components/View";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings"
import { GlobalProvider } from "./hooks/useGlobalContext";

const App = () => (
  <GlobalProvider>
    <View>
      <Hearder />
      <Navigation />
      <Settings />
      <Body>TEST</Body>
    </View>
  </GlobalProvider>
);

export default App;
