import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import Counter from "./counter";
import boardStore from "../store/boardStore";

// Style
const Container = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: ${(props) => props.theme.radius};
  padding: 1rem;
  color: #ddd;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem auto;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

// Component
const Dashboard = () => {
  const { counters, sum } = boardStore;
  return (
    <Container>
      <h1>Dashboard</h1>

      <Row>
        <Counter value={counters.counter1} />
        <Counter value={counters.counter2} />
        <Counter value={counters.counter3} />
      </Row>

      <Row>
        <div>
          <h3>Sum</h3>
          <Counter value={sum} />
        </div>
      </Row>
    </Container>
  );
};

export default observer(Dashboard);
