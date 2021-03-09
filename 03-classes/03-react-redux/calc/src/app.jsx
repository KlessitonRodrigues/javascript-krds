import React, { Component } from "react"
import Components from "./Component/index"
import "./app.css"

const {
    Calc,
    Display,
    Button } = Components

export default class App extends Component {

    render() {
        return (
            <Calc>
                <Display value="123456789012" />
                <Display value="=123" />
                <Button label="AC" />
                <Button label="/" />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="x" />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" />
                <Button label="." />
                <Button label="0" />
                <Button label="Del" />
            </Calc>
        )
    }
}