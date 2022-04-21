import React, { useState } from "react";

import "./style.sass";

/** @param {Props} props */
const Card = (props) => {
  const [dark, setDark] = useState(false);

  return (
    <div className={"card" + (dark ? " --dark" : "")}>
      <h3 className="__title">{props.title}</h3>
      <div className="__content">{props.children}</div>
      <button className="__button" onClick={() => setDark(!dark)}>
        Turn {dark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Card;

/** @typedef {{
 * title: string
 * }} Props */
