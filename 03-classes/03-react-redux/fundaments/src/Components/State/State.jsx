import React, {useState} from "react"
import InputState from "./InputState"

const State = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function setName(fisrtName, lastName){
      setFirstName(fisrtName)
      setLastName(lastName)
  }

  return (
    <div className="flex-items flex-start">
      <div className="col-l6-m12-s12">
        <InputState setName={setName} />
      </div>
      <div className="col-l6-m12-s12">
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
