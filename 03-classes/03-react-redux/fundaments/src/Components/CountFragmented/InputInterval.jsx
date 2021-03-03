import React, { useState } from "react"

const InputInterval = props => {
  const [interval, setInterval] = useState(1)

  const setValue = (e) => {
    const inputValue = e.target.value
    setInterval(inputValue)
    props.countInterval(inputValue)
  }

  return (
    <input
      type="number"
      value={interval}
      onChange={setValue}
    />
  )
}

export default InputInterval
