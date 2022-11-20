import {
  Card,
  Container,
  RevelSquare,
  RevelSquareLabel,
  RotateSquare2D,
  RotateSquare3D,
  RotateSquareX50andZ360,
} from "./styles";

const Basic = () => (
  <Container>
    Basic
    <Card>
      <RotateSquare2D>2D</RotateSquare2D>
      rotate 2D (360deg)
    </Card>
    <Card>
      <RotateSquare3D>3D</RotateSquare3D>
      rotate X (50%)
    </Card>
    <Card>
      <RotateSquareX50andZ360>3D</RotateSquareX50andZ360>
      rotate Z (360) + X (40%)
    </Card>
    <Card>
      <RevelSquareLabel>hover revel</RevelSquareLabel>
      <RevelSquare>3D</RevelSquare>
    </Card>
  </Container>
);

export default Basic;
