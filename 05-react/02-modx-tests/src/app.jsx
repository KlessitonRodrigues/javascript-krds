import React, { Component } from "react"
import styled from "styled-components"

import Dashboard from "./components/dashboard"
import Manager from "./components/manager"

// style
const Layout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: .5rem;
    column-gap: .5rem;
    padding: .5rem;
`

// component
export default class App extends Component {
    render() {
        return (
            <Layout>
                <Dashboard />
                <Manager />
            </Layout>
        )
    }
}
