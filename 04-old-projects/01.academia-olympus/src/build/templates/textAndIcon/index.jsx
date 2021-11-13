import React from "react";

import "./style.sass";

/** @type { TextAndIcon } */
const TextAndIcon = ({ icon, size, children }) => (
  <span className="text-and-icon">
    <i className={`icon icon-${icon} ${size || ""}`} />
    <p className="text">{children}</p>
  </span>
);

export default TextAndIcon;

/** @typedef {( props: {
 * icon: string
 * size: string
 * }) => JSX.Element } TextAndIcon
 */
