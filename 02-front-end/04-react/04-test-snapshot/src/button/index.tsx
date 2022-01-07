import React from "react";

import * as s from "./style";

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => (
  <button style={s.Container} onClick={onClick || null}>
    {text}
  </button>
);

export default Button;
