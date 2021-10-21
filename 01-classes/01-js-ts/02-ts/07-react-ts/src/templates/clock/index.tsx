import React from "react";

import { Container, HH, MM, SS } from "./style";

interface Props {
  HH: number;
  MM: number;
  SS: number;
}

const Clock = (props: Props): JSX.Element => (
  <Container>
    <HH>{props.HH}</HH>
    <MM>{props.MM}</MM>
    <SS>{props.SS}</SS>
  </Container>
);

export default Clock;
