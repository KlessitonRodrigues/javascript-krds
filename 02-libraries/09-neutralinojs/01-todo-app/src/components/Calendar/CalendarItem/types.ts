export type BoxStyles = 'base' | 'day' | 'day-out-of-month' | 'header';

export type ItemFloat = 'topLeft' | 'bottomLeft' | 'topRight';

export type Props = {
  expanded?: boolean;
  data: {
    styleType: BoxStyles;
    name?: string;
    topLeft?: any;
    bottomLeft?: any;
    topRight?: any;
    content?: any;
  };
};
