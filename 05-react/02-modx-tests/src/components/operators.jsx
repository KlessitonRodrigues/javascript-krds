import React from "react"
import Style from "styled-components"

// Style
const Button = Style.button`
    padding: .25rem .5rem;
    min-width: 3.5rem;
    margin: .5rem .25rem;
    border-radius: .25rem;
    background-color: #4392F1;
    color: #FFF;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
`

// Component
const Operators = props => (
    <div>
        <Button
            onClick={() => props.inc++}>
            +
        </Button>
        <Button
            onClick={() => props.dec--}>
            -
        </Button>
    </div>
)

export default Operators