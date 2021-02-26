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
  State,
  ControlledInput,
  Count } = Components

const App = () => (
    <div id="app">
      <CardList>

        <Card
          title="Número Aleatório"
          color="#16B"
          cols="l-5 m-5 s-11"
          >
          <Random max="10" min="1" />
        </Card>

        <Card
          title="React (Children.map)"
          color="#481"
          cols="l-5 m-5 s-11"
          >
            <AParent
              parentSay="I am a Father"
              childSay="I am a Child"
              >
              <AChild />
              <AChild />
              <AChild />
            </AParent>
        </Card>

        <Card
          title="List Items (key)"
          color="#63B"
          cols="l-10 m-10 s-11"
          >
          <List />
        </Card>

        <Card
          title="Fruits (Table)"
          color="#C33"
          cols="l-5 m-5 s-11"
          >
          <FruitsTable />
        </Card>

        <Card
          title="Conditional"
          color="#2A9"
          cols="l-5 m-5 s-11">
          <If test={true}>
            <span> hello world! </span>
          </If>

          <hr/>

          <Ternary
            test={false}
            />
        </Card>

        <Card
          title="State (useState)"
          color="#444"
          cols="l-5 m-5 s-11"
          >
            <State />
        </Card>

        <Card
          title="Controlled input"
          color="#A66"
          cols="l-5 m-5 s-11"
          >
            <ControlledInput />
        </Card>

        <Card
          title="Count"
          color="#A92"
          cols="l-5 m-5 s-11"
          >
            <Count />
        </Card>











      </CardList>
    </div>
)

export default App
