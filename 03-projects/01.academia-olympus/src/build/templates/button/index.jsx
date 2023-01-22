import React from "react";

import "./style.sass";

/** @type { Button } */
const Button = ({ text, onClick }) => (
  <button className="default-btn" onClick={onClick} type="button">
    {text}
  </button>
);

export default Button;

/** @typedef {( props: {
 * text: string,
 * onClick: function
 * }) => JSX.Element } Button
 */
