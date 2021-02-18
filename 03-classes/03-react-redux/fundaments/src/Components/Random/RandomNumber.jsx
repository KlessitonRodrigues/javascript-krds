import React from "react"

const Random = props => {
  const max = Number(props.max)
  const min = Number(props.min)
  const random = Math.floor(
    Math.random() * ((max + 0.98) - min) + min
  )

  return (
    <div>
       Número máximo: {max} <br/>
       Número mínimo: {min} <br/>
      <span> Número Aleatório: {random} </span>
    </div>
  )
}
export default Random
