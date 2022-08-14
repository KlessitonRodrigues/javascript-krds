import { CSSProperties, ReactNode } from 'react';

type Props = {
  x?: CSSProperties['justifyItems'];
  y?: CSSProperties['alignItems'];
  xContent?: CSSProperties['justifyContent'];
  yContent?: CSSProperties['alignContent'];
  column?: boolean;
  children: ReactNode;
};

const Flex = (props: Props) => {
  const flexStyle: CSSProperties = {
    display: 'flex',
    flexDirection: props.column ? 'column' : 'row',
    alignItems: props.y || 'center',
    alignContent: props.yContent || 'stretch',
    justifyItems: props.x || 'stretch',
    justifyContent: props.xContent || 'center',
  };

  return <div style={flexStyle}>{props.children}</div>;
};

export default Flex;
