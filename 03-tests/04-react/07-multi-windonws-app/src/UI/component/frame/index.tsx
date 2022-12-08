import { useEffect, useState } from "react";
import { actions } from "./actions";
import { Container } from "./styled";

const Frame = () => {
  const [elName, setElName] = useState("null");
  useEffect(() => {
    actions.addMouseListener().then((el) => {
      if (el.tagName === "HTML") return;
      setElName(el.tagName);
      el.onmouseover = () => {
        el.style.border = "3px solid red";
      };
      el.onmouseleave = () => {
        el.style.border = "3px solid transparent";
      };
    });
  }, [elName]);

  return <Container>FRAME {elName}</Container>;
};

export default Frame;
