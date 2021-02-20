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

        <Card
          title="Número Aleatório" color="#16B"
          cols="l5-m5-s11"
          >
          <Random max="10" min="1" />
        </Card>

        <Card
          title="React (Children.map)" color="#481"
          cols="l5-m5-s11"
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
          title="List Items (key)" color="#63B"
          cols="l10-m10-s11"
          >
          <List />
        </Card>

      </CardList>
    </div>
)

export default App
