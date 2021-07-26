import React from "react"
import styled from "styled-components"

// style
const Button = styled.button`
    padding: .5rem 2rem;
    min-width: 3.5rem;
    margin: .5rem .25rem;
    border-radius: .25rem;
    background-color: #4392F1;
    color: #FFF;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &.red{
        background-color: #b91b1b;
    }
`

// component
const Operators = props => (
    <div>
        <Button
            onClick={props.plusClick}>
            +
        </Button>
        <Button className="red"
            onClick={props.minusClick}>
            -
        </Button>
    </div>
)

export default Operators