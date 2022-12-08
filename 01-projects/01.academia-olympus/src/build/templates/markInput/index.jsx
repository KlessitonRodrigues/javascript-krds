import React from "react";

import "./style.sass";

/** @type { MarkInput } */
const MarkInput = ({ type, name, checked, label }) => (
  <label className="mark-input">
    <input
      className="mi__input"
      type={type || "checkbox"}
      name={name}
      value={name}
      checked={checked}
    />
    <div className="mi__mark">
      <div className="mi__mark-button"></div>
    </div>
    {label}
  </label>
);

export default MarkInput;

/** @typedef {( props: {
 * type: "checkbox" | "radio"
 * name: string
 * label: string
 * checked: boolean
 * }) => JSX.Element } MarkInput
 */
