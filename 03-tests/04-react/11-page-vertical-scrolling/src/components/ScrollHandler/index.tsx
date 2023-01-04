import { PropsWithChildren, useEffect, useState } from "react";
import { Container, Content } from "./styled";

const ScrollHandler = (props: PropsWithChildren) => {
  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const content = document.getElementById("scroll-content");
    const pos = { y: 0 };

    if (!container || !content) return;
    container.style.height = "100vh";
    container.style.maxHeight = "100vh";
    container.style.minHeight = "100vh";

    const hadleMouseWheel = (ev: WheelEvent) => {
      const scrollDown = ev.deltaY < 0;
      pos.y += scrollDown ? 40 : -40;
      content.style.transform = `translateY(${pos.y}px)`;
      console.log("WHEEL", pos.y);
    };

    container.onwheel = hadleMouseWheel;
  }, []);

  return (
    <Container id="scroll-container">
      <Content id="scroll-content">{props.children}</Content>
    </Container>
  );
};

export default ScrollHandler;
