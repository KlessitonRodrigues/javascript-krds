import React from "react"

const AParent = props => (
  <>
    <h2> {props.parentSay} </h2>
      {  React.Children.map(props.children, (child)=>{
        return React.cloneElement(child, props)
      })
    }
  </>
)

export default AParent
