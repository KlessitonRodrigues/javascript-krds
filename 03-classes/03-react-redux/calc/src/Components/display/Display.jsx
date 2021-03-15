import React, { useState } from "react"

const Display = props => {
    const [display, setDisplay] = useState("")
    const calc = props.calc

    calc.setDisplay === null ?
        calc.setDisplay = setDisplay :
        calc.setResult = setDisplay

    return (
        <div className="calc-display">
            {display}
        </div>)
}

export default Display