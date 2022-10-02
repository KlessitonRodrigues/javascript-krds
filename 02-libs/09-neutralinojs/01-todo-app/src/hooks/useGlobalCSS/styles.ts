import usePaletteContext from '../usePaletteContext';

export default () => {
  const palette = usePaletteContext();
  return [
    `.color1-bg-hover {
      background-color: ${palette.colorA} !important;
    }`,
    `.color1-bg-hover:hover {
      background-color: ${palette.colorADark} !important;
    }`,
    `.color1-border-hover:hover {
      border-color: ${palette.colorA}88 !important;
    }`,
    `.color1-shadow-hover:hover {
      box-shadow: 1px 1px 8px 0 ${palette.colorA}22 !important;
    }`,
    `.dark-text-hover:hover {
      color: ${palette.dark} !important;
    }`,
    `.color1-text-hover:hover {
      color: ${palette.colorA} !important;
    }`,
    `@keyframes fadeIn {
        0% { opacity: 1; }
        29% { opacity: 0.5; transform: translate3d( 0, 0, 0); }
        30% { opacity: 0; transform: translate3d(50%, 0, 0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0); } 
    }
    .fadeIn { animation-name: fadeIn; }`,
    `
    /* width */
    div::-webkit-scrollbar {
      width: 3px;
    }
    /* Track */
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    /* Handle */
    div::-webkit-scrollbar-thumb {
      background: ${palette.colorA + '66'};
      border-radius: 5px;
    }
    /* Handle on hover */
    div::-webkit-scrollbar-thumb:hover {
      background: ${palette.colorA};
    }`,
    ` .show-items-onhover .show-onhover{
      opacity: 0 !important;
    }
      .show-items-onhover:hover .show-onhover{
      opacity: 1 !important;
    }
    `,
  ].join('\n');
};
