import React, { useEffect, useReducer } from "react";
import { reducer, newAction, INITIAL_STATE } from "./store";

import "./style.sass";

function newTagOption(option) {
  return (
    <option key={option} value={option}>
      {option}
    </option>
  );
}

function mapOptions(options = [], selecteds = []) {
  return options
    .filter((option) => !selecteds.includes(option))
    .map((option) => newTagOption(option));
}

function mapSelections(selecteds = [], dispatch) {
  return selecteds.map((selection) => (
    <div
      key={selection}
      className="li__selection"
      onClick={() => newAction(dispatch, "REMOVE_SELECTION", selection)}
    >
      {selection}
      <span> &times;</span>
    </div>
  ));
}

/** @type { ListInput } */
const listInput = ({ options, label, onChange }) => {
  const [{ selecteds }, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    onChange && onChange(selecteds);
  }, [selecteds.length]);

  return (
    <div className="list-input">
      <h2 className="li__title">{label}</h2>
      <select
        className="li__select"
        type="text"
        list="ipt-list"
        onChange={(ev) => newAction(dispatch, "ADD_SELECTION", ev.target.value)}
      >
        <option>+</option>
        {mapOptions(options, selecteds)}
      </select>
      <div>{mapSelections(selecteds, dispatch)}</div>
    </div>
  );
};

export default listInput;

/** @typedef {( props: {
 * label: string
 * options: string[]
 * onChange: (selecteds: string[]) => void
 * })=> JSX.Element } ListInput
 */
