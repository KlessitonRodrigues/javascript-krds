import React, { useState } from "react"

const Display = props => {
    const [display, setDisplay] = useState("")

    props.type === "operation" ?
        props.calc.setOpeDisplay = setDisplay :
        props.calc.setResDisplay = setDisplay

    return (
        <div className={"calc-display " + props.type}>
            {display}
        </div>
    )
}

export default Display