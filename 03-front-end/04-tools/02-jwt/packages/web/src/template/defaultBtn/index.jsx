import React from "react";

import "./style.sass";

const DefaultButton = ({ label, onClick }) => (
  <button type="button" className="default-button" onClick={onClick}>
    {label}
  </button>
);

export default DefaultButton;
