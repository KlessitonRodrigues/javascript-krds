import { Container } from "./sytled";

const Button = ({ label, onClick }: ButtonProps) => (
  <Container onClick={() => onClick && onClick()}>{label}</Container>
);

export default Button;
