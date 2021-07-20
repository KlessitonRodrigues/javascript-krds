import React, { useRef } from "react"
import Style from "styled-components"

// Style
const Container = Style.div`
    width: 10rem;
    height: 14rem;
    margin: 1rem;
    background-color: #FDE74C;
    color: #444;
    border-radius: .5rem;
    box-shadow: 0 2px 4px #0004;
    transition: .4s box-shadow;
    text-align: center;
    &:hover{
        box-shadow: 0 4px 8px #0004;
    }
`

const Number = Style.div`
    font-size: 8rem;
    font-family: sans-serif;
    margin-bottom: 1rem;
`

// Component
const Counter = props => {
    const renderCount = useRef(0)
    renderCount.current += 1

    return (
        <Container>
            <Number>
                {props.value}
            </Number>
            render:{renderCount.current}
        </Container>
    )
}

export default React.memo(Counter)
