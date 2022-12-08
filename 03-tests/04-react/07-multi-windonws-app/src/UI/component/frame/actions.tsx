export const actions = {
  addMouseListener: () => {
    return new Promise<HTMLElement>((res, rej) => {
      window.addEventListener("mouseover", (ev) => {
        const el = ev.target as HTMLElement;
        res(el);
      });
    });
  },
};
