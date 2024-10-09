export const getEl = () => document.querySelector('div');

export const getItemGridItem = (n: number) => `.item-grid > div:nth-child(${n})`;
