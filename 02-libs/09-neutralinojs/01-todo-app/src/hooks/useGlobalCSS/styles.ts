import usePaletteContext from '../usePaletteContext';

export default () => {
  const palette = usePaletteContext();
  return [
    `.color1-bg-hover {background-color: ${palette.color1} !important;}`,
    `.color1-bg-hover:hover {background-color: ${palette.color1Dark} !important;}`,
    `.color1-border-hover:hover {border-color: ${palette.color1}88 !important;}`,
    `.color1-shadow-hover:hover {box-shadow: 1px 1px 8px 0 ${palette.color1}22 !important;}`,
    `.dark-text-hover:hover {color: ${palette.dark} !important;}`,
    `.color1-text-hover:hover {color: ${palette.color1} !important;}`,
  ].join('');
};
