import React, { useState } from "react"
import Style from "styled-components"

// Style
const Container = Style.div`
    padding: 1rem;
`

// Component
const Input = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [num3, setNum3] = useState("")

    return (
        <Container>
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)} />
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)} />
            <input
                type="number"
                value={num3}
                onChange={e => setNum3(e.target.value)} />
        </Container>
    )
}

export default Input