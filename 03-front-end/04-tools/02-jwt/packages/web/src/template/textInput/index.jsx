import React from "react";

import "./style.sass";

const TextInput = ({ label, type, value, onChange, placeholder }) => (
  <label className={`text-input`}>
    <b className="ti__label">{label}</b>
    <input
      className="ti__input"
      type={type || "text"}
      value={value || "uncontroled"}
      onChange={(ev) => onChange && onChange(ev.target.value)}
      placeholder={placeholder || "..."}
    />
  </label>
);

export default TextInput;
