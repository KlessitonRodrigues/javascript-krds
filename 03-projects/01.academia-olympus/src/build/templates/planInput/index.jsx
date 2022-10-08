import React from "react";

import "./style.sass";

/** @type {PlanInput} */
const PlanInput = ({ list, value, onChange, selected }) => {
  const listMap = list.map((item, i) => <li key={i}>{item}</li>);

  return (
    <label className="plan-input" key={value}>
      <span className="pi__title">{value}</span>
      <input
        className="pi__radio"
        type="radio"
        value={value}
        checked={value === selected}
        onChange={() => onChange(value)}
      />
      <div className="pi__mark">
        <div className="pi__mark-button"></div>
      </div>
      <ul className="pi__list">{listMap}</ul>
    </label>
  );
};

export default PlanInput;

/** @typedef {( props: {
 *  list: string[]
 *  value: string
 *  selected: string
 *  onChange?: (value: string) => void
 * }) => JSX.Element } PlanInput
 */
