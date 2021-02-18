import React from "react"
import Components from "./Components/index.jsx"
import "./App.css"

const {Random, Card} = Components

const App = () => (
  <Card title="Número Aleatório">
    <Random max="10" min="1" />
  </Card>
)

export default App
