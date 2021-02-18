import React from "react"
import Components from "./Components/index.jsx"
import "./App.css"

const {
  Random,
  Card,
  CardList,
  AParent,
  AChild,
  List } = Components

const App = () => (
    <div id="app">
      <CardList>

        <Card title="Número Aleatório" color="#16B">
          <Random max="10" min="1" />
        </Card>

        <Card title="React (Children.map) (cloneElement)" color="#481">
          <AParent parentSay="I am a Father" childSay="I am a Child">
            <AChild />
            <AChild />
            <AChild />
          </AParent>
        </Card>

        <Card title="List items" color="#63B">
          <List />
        </Card>

      </CardList>
    </div>
)

export default App
