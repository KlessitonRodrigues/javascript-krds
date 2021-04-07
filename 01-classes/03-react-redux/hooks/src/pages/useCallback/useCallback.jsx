import React, { useRef, useState } from "react"
import "./useCallback.css"
import RenderCount from "../../components/renderCount/RenderCount"

const UseCallback = () => {
    const render = useRef(0)
    render.current = render.current + 1

    const [counter, setCounter] = useState(0)
    const [inputText, setInputText] = useState("")

    const getInput = value => setInputText(value)
    const memoGetInput = React.useCallback(getInput, 0)

    return (
        <div className="page use-callback">
            <h2>useCallback(fn, denpList)</h2>

            <div className="render">
                Parent Render: <b>{render.current}</b>
                <hr />
                Counter: <b>{counter}</b>
            </div>

            <div className="buttons">
                <button
                    onClick={() => setCounter(counter + 1)}>
                    +</button>

                <button
                    onClick={() => setCounter(counter - 1)}>
                    -</button>
            </div>

            <div className="input-text">
                input text
                <hr />
                <b>{inputText}</b>
            </div>

            <RenderCount setInput={memoGetInput} />
        </div>
    )
}

export default UseCallback