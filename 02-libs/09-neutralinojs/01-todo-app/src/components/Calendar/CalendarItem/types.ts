export type DayBoxStyles = 'base' | 'day' | 'day-out-of-month' | 'header';

export type CalendarItemFloat = 'topLeft' | 'bottomLeft' | 'topRight';

export type Props = {
  data: {
    styleType: DayBoxStyles;
    name?: string;
    topLeft?: any;
    bottomLeft?: any;
    topRight?: any;
    content?: any;
    animationDelay?: string;
  };
};
