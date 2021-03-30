import React, { useState } from "react"
import InputState from "./InputState"

const State = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function setName(fisrtName, lastName) {
    setFirstName(fisrtName)
    setLastName(lastName)
  }

  return (
    <div className="flex-items flex-start">
      <div className="l-6 m-12 s-12">
        <InputState setName={setName} />
      </div>
      <div className="l-6 m-12 s-12">
        <div>
          Fisrt Name: <b><span id="firstName">{firstName}</span></b>
        </div>
        <div>
          Last Name: <b><span id="lastName">{lastName}</span></b>
        </div>
      </div>
    </div>
  )
}

export default State
