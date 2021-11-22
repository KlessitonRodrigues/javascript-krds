import React from "react";
import styled from "styled-components";

// style
const Button = styled.button`
  padding: 0.5rem 2rem;
  min-width: 3.5rem;
  margin: 0.5rem 0.25rem;
  border-radius: 0.25rem;
  background-color: #4392f1;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &.red {
    background-color: #b91b1b;
  }
`;

// component
const Operators = (props) => (
  <div>
    <Button onClick={props.plusClick}>+</Button>
    <Button className="red" onClick={props.minusClick}>
      -
    </Button>
  </div>
);

export default Operators;
