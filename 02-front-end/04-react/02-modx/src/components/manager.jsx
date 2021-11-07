import React from "react";
import styled from "styled-components";

import Operators from "./operators";
import boardStore from "../store/boardStore";

// style
const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: ${(props) => props.theme.radius};
  color: #ddd;
  padding: 1rem;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Panel = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.radius};
  color: #444;
  display: grid;
  text-align: center;
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  @media (min-width: 768px) {
    margin: 0.5rem;
  }
`;

// component
const Manager = () => {
  const { incCounter, decCounter } = boardStore;

  return (
    <Container>
      <h1>Manager</h1>
      <Row>
        <Panel>
          <h2>Counter 1</h2>
          <Operators
            plusClick={() => incCounter(1)}
            minusClick={() => decCounter(1)}
          />
        </Panel>
        <Panel>
          <h2>Counter 2</h2>
          <Operators
            plusClick={() => incCounter(2)}
            minusClick={() => decCounter(2)}
          />
        </Panel>
        <Panel>
          <h2>Counter 3</h2>
          <Operators
            plusClick={() => incCounter(3)}
            minusClick={() => decCounter(3)}
          />
        </Panel>
      </Row>
    </Container>
  );
};

export default Manager;
