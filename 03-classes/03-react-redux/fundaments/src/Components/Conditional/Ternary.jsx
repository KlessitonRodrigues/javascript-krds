import React from "react"

const Ternary = props => {
  return props.test ?
    <span> is TRUE </span> :
    <span> is FALSE </span>
}

export default Ternary
