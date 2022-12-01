import ReactDOM from "react-dom";
import Frame from "../frame/index";

export const actions = {
  openWindow: () => {
    const frame = window.open("", "_blank", "height=600,width=400,left=100,top=100");
    const parentFrame = window.opener;
    console.log("frame", frame);
    console.log("parentFrame", parentFrame);
    ReactDOM.render(<Frame />, frame.document.body);
  },
};
