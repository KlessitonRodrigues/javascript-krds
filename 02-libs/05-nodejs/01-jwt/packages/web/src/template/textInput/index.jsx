import React from "react";

import "./style.sass";

const TextInput = ({ label, type, value, onChange }) => (
  <label className={`text-input`}>
    <b className={`ti__label --show-${!!value}`}>{label}</b>
    <input
      className="ti__input"
      type={type || "text"}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      placeholder={label}
    />
  </label>
);

export default TextInput;
