import React from "react";

import "./style.css";

/** @type {FlatInput} */
const TextInput = ({ label, type, holder, value, onChange }) => (
  <label className="text-input">
    <span className="__title">{label}</span>
    <input
      className="__input"
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      type={type || "text"}
      placeholder={holder || "..."}
    />
  </label>
);

export default TextInput;

/** @typedef {(props:{
 * label: string,
 * value: string | number,
 * onChange: (value: string) => void,
 * type: "text" | "number",
 * holder: string
 * }) => JSX.Element } FlatInput */
