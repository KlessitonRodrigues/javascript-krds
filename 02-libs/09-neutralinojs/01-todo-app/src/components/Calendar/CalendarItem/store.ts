import { BoxStyles } from './types';

export const classByType = (type: BoxStyles) => {
  if (type === 'header') return 'color1-bg-hover';
  if (type === 'day' || type === 'day-out-of-month')
    return 'color1-border-hover color1-shadow-hover';
};
