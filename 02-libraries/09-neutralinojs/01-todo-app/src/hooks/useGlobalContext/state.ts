export type GlobalState = {
  currentMonth: Date;
  currentWeek: number;
  AnimationDirection: 'left' | 'right';
  sidePanel: {
    settings: boolean;
    tags: boolean;
    todo: boolean;
  };
  theme: 'cian' | 'cianDark';
};

export const globalState: GlobalState = {
  currentMonth: new Date(),
  currentWeek: 0,
  AnimationDirection: 'right',
  sidePanel: {
    settings: false,
    tags: false,
    todo: false,
  },
  theme: 'cian',
};
