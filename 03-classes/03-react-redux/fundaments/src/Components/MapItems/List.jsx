import React from "react"
import listItems from "./data/itemsData"

const List = () => {

  const ListElemennts = listItems.map((item, i) => {
    return (
      <li className="col-l3-m4-s6" key={item.id}>
        <b>{item.name}</b> : {item.description}
      </li>
    )
  })

  return (
    <ul className="flex-items items-start" style={{listStyle:"none"}}>
      { ListElemennts }
    </ul>
  )
}

export default List
