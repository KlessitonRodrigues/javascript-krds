import React from "react"

const InputState = props => {
  function setState() {
    const firstName = document.getElementById("firstNameField").value
    const lastName = document.getElementById("lastNameField").value
    props.setName(firstName, lastName)
  }

  return (
    <>
      <label htmlFor="firstNameField">First Name</label>
      <input id="firstNameField" type="text" />
      <label htmlFor="lastNameField">Last Name</label>
      <input id="lastNameField" type="text" />
      <button onClick={setState}>set</button>
    </>
  )
}

export default InputState
