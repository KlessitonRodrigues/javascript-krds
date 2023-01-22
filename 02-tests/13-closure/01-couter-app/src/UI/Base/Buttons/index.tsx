import { Arrows, Container, Content } from "./styled";
import { TiArrowDown, TiArrowUp } from "react-icons/ti";

const Button = (props: ButtonProps) => {
  const { label, icon, showArrows, onClick, onArrowclick } = props;

  return (
    <Container onClick={() => onClick && onClick(label)}>
      <Content>
        {icon}
        {label}
      </Content>

      <Arrows display={showArrows}>
        <TiArrowUp onClick={() => onArrowclick && onArrowclick("up")} />
        <TiArrowDown onClick={() => onArrowclick && onArrowclick("down")} />
      </Arrows>
    </Container>
  );
};

export default Button;
