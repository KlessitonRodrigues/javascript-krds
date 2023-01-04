import { useEffect, useRef } from "react";
import { Container } from "./styled";

const DragAndDrop = (el: HTMLElement) => {
  const elStatus = {
    isSelected: false,
    clickPosition: { x: 0, y: 0 },
  };

  el.style.position = "absolute";
  el.onmousedown = (ev) => {
    elStatus.isSelected = true;
    elStatus.clickPosition.x = ev.offsetX;
    elStatus.clickPosition.y = ev.offsetY;
  };

  document.addEventListener("mouseup", () => (elStatus.isSelected = false));
  document.addEventListener("mousemove", (ev) => {
    if (!elStatus.isSelected) return;
    el.style.left = ev.clientX - elStatus.clickPosition.x + "px";
    el.style.top = ev.clientY - elStatus.clickPosition.y + "px";
  });
};

const Frame = () => {
  const frameRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const el = frameRef.current;
    DragAndDrop(el);
  }, []);

  return <Container ref={frameRef}>FRAME</Container>;
};

export default Frame;
