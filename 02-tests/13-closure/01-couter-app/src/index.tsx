import HomePage from "./UI/Pages/Home";
import GlobalCSS from "./styles/globalCSS";
import reactDOM from "react-dom";

const App = () => (
  <>
    <GlobalCSS />
    <HomePage />
  </>
);

reactDOM.render(<App />, document.getElementById("root"));
