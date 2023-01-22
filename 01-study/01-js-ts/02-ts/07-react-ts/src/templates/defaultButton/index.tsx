import React from "react";
import { Container } from "./style";

interface Props {
  label: string;
}

const DefaultButton = (props: Props) => <Container>{props.label}</Container>;

export default DefaultButton;
