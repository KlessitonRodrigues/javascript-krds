export type GlobalState = {
  currentMonth: Date;
  sidePanel: {
    settings: boolean;
    tags: boolean;
    todo: boolean;
  };
  theme: 'cian' | 'cianDark';
};

export const globalState: GlobalState = {
  currentMonth: new Date(),
  sidePanel: {
    settings: false,
    tags: false,
    todo: false,
  },
  theme: 'cian',
};
