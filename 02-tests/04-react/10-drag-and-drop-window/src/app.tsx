import ReactDOM from "react-dom";
import Frame from "./components/Frame";
import { Container } from "./styled";

const App = () => (
  <Container>
    <Frame />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));
