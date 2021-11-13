import React from "react";

import "./style.sass";

/** @type { TextInput } */
const TextInput = ({ type, name, title, placeholder, value, onChange }) => (
  <label className="text-input">
    {title}
    <input
      className="ti__input"
      name={name}
      type={type || "text"}
      placeholder={placeholder || "..."}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
  </label>
);

export default TextInput;

/** @typedef {( props: {
 * title: string
 * name: string
 * type: "text" | "number" | "password" | "email"
 * placeholder: string
 * value: string
 * onChange: ( value: string ) => void
 * }) => JSX.Element } TextInput
 */
