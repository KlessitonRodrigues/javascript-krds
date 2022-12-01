import Button from "src/UI/base/button/index";
import { actions } from "./actions";

const NewWindow = () => (
  <div>
    <Button label="New window" onClick={actions.openWindow} />
    <span id="mouse">TEST</span>
  </div>
);

export default NewWindow;
