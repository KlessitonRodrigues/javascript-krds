import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react"

import Counter from "./counter"
import boardStore from "../store/boardStore"

// Style
const Container = styled.div`
    background-color: ${props => props.theme.secondary};
    border-radius: ${props => props.theme.radius};
    padding: 1rem;
    color: #DDD;
    text-align: center;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5rem auto;
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;
    }
`

// Component
const Dashboard = () => {
    const { counters } = boardStore
    return (
        <Container>
            <h1>Dashboard</h1>
            <Row>
                <Counter value={counters.counter1} />
                <Counter value={counters.counter2} />
                <Counter value={counters.counter3} />
            </Row>
        </Container>
    )
}

export default observer(Dashboard)