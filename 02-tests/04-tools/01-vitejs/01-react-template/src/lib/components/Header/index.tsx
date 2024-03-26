import Icons from 'src/lib/base/Icons';
import { FlexRow } from 'src/lib/base/StyledComponents/Containers';

import { Container } from './styled';

const Header = () => {
  return (
    <Container>
      <FlexRow>
        <Icons type="react" size={10} />
        <h1>React Template</h1>
      </FlexRow>
    </Container>
  );
};

export default Header;
