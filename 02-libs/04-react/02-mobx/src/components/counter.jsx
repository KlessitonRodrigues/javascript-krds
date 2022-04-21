import React, { useRef } from "react";
import styled from "styled-components";

// Style
const Container = styled.div`
  width: 10rem;
  height: 14rem;
  margin: 1rem;
  padding-top: 1.5rem;
  background-color: #fde74c;
  color: #444;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px #0004;
  transition: 0.4s box-shadow;
  text-align: center;
  &:hover {
    box-shadow: 0 4px 8px #0004;
  }
`;

const Number = styled.div`
  font-size: 6rem;
  font-family: sans-serif;
  margin-bottom: 3rem;
`;

// Component
const Counter = (props) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <Container>
      <Number>{props.value}</Number>
      rendered:{renderCount.current}
    </Container>
  );
};

export default React.memo(Counter);
