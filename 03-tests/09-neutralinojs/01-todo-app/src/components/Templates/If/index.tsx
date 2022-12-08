import { ReactElement } from 'react';

type Props = {
  value: boolean;
  true?: ReactElement;
  false?: ReactElement;
};

const If = (props: Props): ReactElement => {
  if (props.value) return props.true;
  return props.false;
};

export default If;
