import usePaletteContext from '../usePaletteContext';

export default () => {
  const palette = usePaletteContext();
  return [
    `.color1-bg-hover {
      background-color: ${palette.color1} !important;
    }`,
    `.color1-bg-hover:hover {
      background-color: ${palette.color1Dark} !important;
    }`,
    `.color1-border-hover:hover {
      border-color: ${palette.color1}88 !important;
    }`,
    `.color1-shadow-hover:hover {
      box-shadow: 1px 1px 8px 0 ${palette.color1}22 !important;
    }`,
    `.dark-text-hover:hover {
      color: ${palette.dark} !important;
    }`,
    `.color1-text-hover:hover {
      color: ${palette.color1} !important;
    }`,
    `@keyframes slide-right {
      0% { transform: translate(0, 0); opacity: 1; }
      50% { transform: translate(100%, 0); opacity: 0; }
      51% { transform: translate(-100%, 0); opacity: 0; }
      100% { transform: translate(0, 0); opacity: 1; }
    }`,
    `.slide-right {
      animation-name: slide-right;
      animation-duration: 0.5s;
      animation-timing-function: ease;
    }`,
    `.slide-left {
      animation-name: slide-right;
      animation-duration: 0.5s;
      animation-direction: reverse;
      animation-timing-function: ease;
    }`,
  ].join('\n');
};
