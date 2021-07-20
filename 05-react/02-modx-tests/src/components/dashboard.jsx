import React, { useRef } from "react"
import Style from "styled-components"
import { observer, inject } from "mobx-react"

import dashboardStore from "../store/dashboardStore"
import Counter from "./counter"

// Style
const Container = Style.div`
    width: fit-content;
    background-color: ${props => props.theme.secondary};
    color: #eee;
    text-align: center;
    padding: .5rem;
    padding-top: 1rem;
    margin: .5rem;
    border-radius: ${props => props.theme.radius};
`

const Row = Style.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: .5rem auto;
`

// Component
const Dashboard = () => {
    return (
        <Container>
            <h2>Dashboard</h2>
            <Row>
                <Counter value={1} />
                <Counter value={1} />
                <Counter value={1} />
            </Row>
        </Container>
    )
}

export default inject("dashboardStore")(observer(Dashboard))