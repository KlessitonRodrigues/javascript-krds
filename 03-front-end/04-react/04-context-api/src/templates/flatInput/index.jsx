import React from "react";

import "./style.css";

/** @type {FlatInput} */
const FlatInput = (props) => (
  <div className="flat-input">
    <label className="__label">
      <span className="__close-btn">&times;</span>
      <span className="__title">{props.label}</span>
      <input
        className="__input"
        value={props.value}
        onChange={(ev) => props.onChange(ev.target.value)}
        type={props.type || "text"}
        placeholder={props.holder || ""}
      />
    </label>
  </div>
);

export default FlatInput;

/** @typedef {(props:{
 * label: string,
 * value: string | number,
 * onChange: (value: string) => void,
 * type: "text" | "number",
 * holder: string
 * }) => JSX.Element } FlatInput */
