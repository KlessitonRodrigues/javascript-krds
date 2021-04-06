import React, { useRef, useState } from "react"
import "./useCallback.css"
import RenderCount from "../../components/renderCount/RenderCount"

const useCallback = () => {
    const render = useRef(0)
    const [counter, setCounter] = useState(0)

    render.current = render.current + 1

    return (
        <div className="page use-callback">
            <RenderCount />
            <RenderCount />
            <RenderCount />

            <div className="render">
                Parent Render Count: {render.current}
                <hr />
                    Count: {counter}
            </div>

            <div className="buttons">

                <button
                    onClick={() => setCounter(counter + 1)}
                >+</button>

                <button
                    onClick={() => setCounter(counter - 1)}
                >-</button>

                <button
                >to chidren</button>
            </div>
        </div>
    )
}

export default useCallback