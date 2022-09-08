import * as types from './types';

export const classByType = (type: types.DayBoxStyles) => {
  if (type === 'header') return 'color1-bg-hover';
  if (type === 'day' || type === 'day-out-of-month') return 'color1-border-hover color1-shadow-hover';
};
