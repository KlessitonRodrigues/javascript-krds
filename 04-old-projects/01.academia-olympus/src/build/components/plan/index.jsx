import React from "react";

import "./style.sass";

const Plan = (props) => (
  <div className="plan-card">
    <h2 className="pc__title">{props.title}</h2>
    <ul className="pc__list">{props.children}</ul>
    <div className="pc__button">{props.value}</div>
  </div>
);

export default Plan;
