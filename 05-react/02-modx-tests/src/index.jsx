import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { ThemeProvider } from "styled-components"

import "./index.css"
import theme from "./theme"

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.querySelector("#root"))