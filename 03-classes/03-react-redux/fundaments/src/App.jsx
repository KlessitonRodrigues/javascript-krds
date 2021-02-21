import React from "react"
import Components from "./Components/index"
import "./App.css"

const {
  Random,
  Card,
  CardList,
  AParent,
  AChild,
  List,
  FruitsTable,
  If,
  Ternary,
  State } = Components

const App = () => (
    <div id="app">
      <CardList>

        <Card title="Número Aleatório" color="#16B" cols="l5-m5-s11">
          <Random max="10" min="1" />
        </Card>

        <Card title="React (Children.map)" color="#481" cols="l5-m5-s11">
          <AParent
            parentSay="I am a Father"
            childSay="I am a Child"
            >
            <AChild />
            <AChild />
            <AChild />
          </AParent>
        </Card>

        <Card title="List Items (key)" color="#63B" cols="l10-m10-s11">
          <List />
        </Card>

        <Card title="Fruits (Table)" color="#C33" cols="l5-m5-s11">
          <FruitsTable />
        </Card>

        <Card title="Conditional" color="#2A9" cols="l5-m5-s11">
          <If test={true}>
            <span> hello world! </span>
          </If>

          <hr />

          <Ternary test={false} />
        </Card>

        <Card title="State (useState)" color="#444" cols="l10-m10-s11">
          <State />
        </Card>

      </CardList>
    </div>
)

export default App
