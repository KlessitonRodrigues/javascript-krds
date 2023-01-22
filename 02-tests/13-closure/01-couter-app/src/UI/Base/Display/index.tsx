import { Container } from "./styled";

const Display = (props: DisplayProps) => {
  const { value } = props;

  return <Container>{value}</Container>;
};

export default Display;
