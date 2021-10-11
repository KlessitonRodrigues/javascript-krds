import React from "react";

import "./style.sass"

const TextInput = ({ label, type, value, onChange, placeholder }) => (
  <label className="text-input">
    {label}
    <input
      type={type || "text"}
      value={value || ""}
      onChange={(ev) => onChange(ev.target.value)}
      placeholder={placeholder || "..."}
    />
  </label>
);

export default TextInput;
