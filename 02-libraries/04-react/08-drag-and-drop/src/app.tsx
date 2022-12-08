import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, TargetContainer } from "./styled";
import FloatArrow from "./UI/Base/FloatArrow";
import { dragAndDropEl } from "./utils/dragAndDrop";

const Target = (props: { id: string }) => {
  useEffect(() => {
    dragAndDropEl(document.getElementById(props.id));
  }, []);
  return <TargetContainer {...props}>{props.id}</TargetContainer>;
};

const App = () => (
  <Container>
    <Target id="target-1" />
    <Target id="target-2" />
    <Row>
      <Target id="target-3" />
      <Target id="target-4" />
      <Target id="target-5" />
      <Target id="target-6" />
    </Row>
    <FloatArrow xpath1="//*[@id='target-1']" xpath2="//*[@id='target-2']" />
    <FloatArrow xpath1="//*[@id='target-2']" xpath2="//*[@id='target-1']" />
    <FloatArrow xpath1="//*[@id='target-3']" xpath2="//*[@id='target-4']" />
    <FloatArrow xpath1="//*[@id='target-4']" xpath2="//*[@id='target-3']" />
    <FloatArrow xpath1="//*[@id='target-5']" xpath2="//*[@id='target-2']" />
    <FloatArrow xpath1="//*[@id='target-1']" xpath2="//*[@id='target-6']" />
    <FloatArrow xpath1="//*[@id='target-1']" xpath2="//*[@id='target-5']" />
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));
