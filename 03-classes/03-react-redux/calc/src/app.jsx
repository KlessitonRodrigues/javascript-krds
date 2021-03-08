import React, { Component } from "react"
import Components from "./Component/index"
import "./app.css"

const {Body} = Components

export default class App extends Component {

    render() {
        return (
            <Body>
                <h1>Hello World</h1>
            </Body>
        )
    }
}