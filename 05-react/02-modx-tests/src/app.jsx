import React, { Component } from "react";
import styled from "styled-components";

import Dashboard from "./components/dashboard";
import Manager from "./components/manager";

// style
const Layout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
  padding: 0.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

// component
export default class App extends Component {
  render() {
    return (
      <Layout>
        <Dashboard />
        <Manager />
      </Layout>
    );
  }
}
