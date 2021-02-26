import React, {useState} from "react"

const ControlledInput = () => {
  const [email, setEmail] = useState("")

  function getInputValue(e){
    setEmail(e.target.value)
  }

  return (
    <>
      <label> email <br />
        <input type="email" value={email} onChange={getInputValue} />
      </label>
      <button> save </button>
    </>
  )
}

export default ControlledInput
