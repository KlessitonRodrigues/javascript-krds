import React from "react"

const Card = props => {
  const CardStyle = {
    backgroundColor: props.color
  }
  
  return (
    <div className={"card col-" + props.cols} >
      <h3 className="title" style={CardStyle}>
        { props.title }
      </h3>
      <div className="body">
        { props.children }
      </div>
    </div>
  )
}

export default Card
