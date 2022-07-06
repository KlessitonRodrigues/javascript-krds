import Hearder from "./components/Header";
import Body from "./components/Body";
import View from "./components/View";
import Navigation from "./components/Navigation";
import Settings from "./components/Settings";
import Tags from "./components/Tags";
import Router from "./pages";
import { GlobalProvider } from "./hooks/useGlobalContext";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <GlobalProvider>
    <BrowserRouter>
      <View>
        <Hearder />
        <Navigation />
        <Settings />
        <Tags />
        <Body>
          <Router />
        </Body>
      </View>
    </BrowserRouter>
  </GlobalProvider>
);

export default App;
