import React from "react"
import fruitsData from "./data/fruits.js"

const FruitsTable = () => {
  const fruitList = fruitsData.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.trans}</td>
      <td>{item.color}</td>
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Translation</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {fruitList}
      </tbody>
    </table>
  )
}

export default FruitsTable
