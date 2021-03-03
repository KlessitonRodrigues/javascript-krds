import React from "react"

const Buttons = props => (
    <>
        <button
            type="button"
            onClick={props.inc}
        > 
        + 
        </button>
        <button
            type="button"
            onClick={props.dec}
        > 
        - 
        </button>
    </>
)

export default Buttons
