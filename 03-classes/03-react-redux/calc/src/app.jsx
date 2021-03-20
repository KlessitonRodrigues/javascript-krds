import React, { Component } from "react"
import Components from "./Components/index"
import calc from "./script/calc.js"
import "./app.css"


const {
    Body,
    Display,
    Button } = Components

export default class App extends Component {

    render() {
        return (
            <Body>
                <Display type="operation" calc={calc} />
                <Display type="result" calc={calc} />
                <Button label="AC" calc={calc} />
                <Button label="/" calc={calc} />
                <Button label="7" calc={calc} />
                <Button label="8" calc={calc} />
                <Button label="9" calc={calc} />
                <Button label="x" calc={calc} />
                <Button label="4" calc={calc} />
                <Button label="5" calc={calc} />
                <Button label="6" calc={calc} />
                <Button label="-" calc={calc} />
                <Button label="1" calc={calc} />
                <Button label="2" calc={calc} />
                <Button label="3" calc={calc} />
                <Button label="+" calc={calc} />
                <Button label="." calc={calc} />
                <Button label="0" calc={calc} />
                <Button label="Del" calc={calc} />
            </Body>
        )
    }
}