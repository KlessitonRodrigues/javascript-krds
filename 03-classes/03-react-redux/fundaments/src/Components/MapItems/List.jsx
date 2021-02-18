import React from "react"
import listItems from "./data/itemsData"

const List = () => {

  const ListElemennts = listItems.map((item, i) => {
    return (
      <li className="col-l6-m6-s12">
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
