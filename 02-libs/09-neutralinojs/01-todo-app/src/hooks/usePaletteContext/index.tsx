import React from 'react';
import useGlobalContext from '../useGlobalContext';

import { BasePalette, base, baseDark } from './state';

export type PaletteContext = BasePalette;

const paletteContext = React.createContext<PaletteContext>(base);

export const PaletteProvider = (props: React.PropsWithChildren) => {
  const [{ theme }] = useGlobalContext();
  let currentTheme = {};

  switch (theme) {
    case 'cian':
      currentTheme = base;
      break;
    case 'cianDark':
      currentTheme = baseDark;
      break;
    default:
      currentTheme = base;
  }

  return (
    // @ts-ignore
    <paletteContext.Provider value={currentTheme}>{props.children}</paletteContext.Provider>
  );
};

const usePaletteContext = () => {
  return React.useContext(paletteContext);
};

export default usePaletteContext;
