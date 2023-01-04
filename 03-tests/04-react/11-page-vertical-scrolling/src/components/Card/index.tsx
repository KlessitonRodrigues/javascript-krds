import { PropsWithChildren, useEffect } from "react";
import { Container } from "./styled";

const Card = (props: PropsWithChildren) => {
  return <Container>{props.children}</Container>;
};

export default Card;
