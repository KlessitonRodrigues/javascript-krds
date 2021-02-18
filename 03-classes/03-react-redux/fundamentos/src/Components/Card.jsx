import React from "react"

const Card = props => (
  <div className="card">
    <h3 className="title">{ props.title }</h3>
    <div className="body">
      { props.children }
    </div>
  </div>
)

export default Card
