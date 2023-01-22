export const dragAndDropEl = (el: HTMLElement) => {
  const mouse = {
    position: { x: 0, y: 0 },
    offset: [0, 0],
    isDown: false,
  };

  el.style.position = "absolute";

  el.addEventListener(
    "mousedown",
    (event) => {
      mouse.isDown = true;
      mouse.offset = [el.offsetLeft - event.clientX, el.offsetTop - event.clientY];
    },
    true
  );

  document.addEventListener("mouseup", () => (mouse.isDown = false), true);

  document.addEventListener(
    "mousemove",
    (event) => {
      event.preventDefault();
      if (mouse.isDown) {
        mouse.position = {
          x: event.clientX,
          y: event.clientY,
        };
        el.style.left = mouse.position.x + mouse.offset[0] + "px";
        el.style.top = mouse.position.y + mouse.offset[1] + "px";
      }
    },
    true
  );
};
