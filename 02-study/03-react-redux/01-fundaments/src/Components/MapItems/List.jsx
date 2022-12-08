import React from "react"
import listItems from "./data/itemsData"

const List = () => {

  const ListElemennts = listItems.map((item, i) => {
    return (
      <li className="l-3 m-4 s-6" key={item.id}>
        <b>{item.name}</b> : {item.description}
      </li>
    )
  })

  return (
    <ul className="flex-items flex-start" style={{ listStyle: "none" }}>
      { ListElemennts}
    </ul>
  )
}

export default List
