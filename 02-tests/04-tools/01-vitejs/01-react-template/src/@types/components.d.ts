declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
  };

  type Icons = {
    size?: number;
    onClick?: () => void;
    style?: React.CSSProperties;
    type: 'react';
  };
}
