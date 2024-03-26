import { useMemo } from 'react';
import { IoLogoReact } from 'react-icons/io5';

import { Container } from './styled';

export const iconMap: Utils.IconMap = {
  react: <IoLogoReact />,
};

const Icons = (props: Props.Icons) => {
  const { type, size, style, onClick } = props;
  const Icon = useMemo(() => iconMap[type], []);

  return (
    <Container className="icon" size={size} style={style} onClick={onClick}>
      {Icon}
    </Container>
  );
};

export default Icons;
