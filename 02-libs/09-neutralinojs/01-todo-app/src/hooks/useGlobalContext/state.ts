export type GlobalState = {
  sidePanel: {
    settings: boolean;
    tags: boolean;
    todo: boolean;
  };
  theme: 'cian' | 'cianDark';
};

export const globalState: GlobalState = {
  sidePanel: {
    settings: false,
    tags: false,
    todo: false,
  },
  theme: 'cian',
};
