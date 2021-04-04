import React, { useState } from "react"
import "./UseState.css"

const UseState = () => {
    const [num, setNum] = useState(0)

    return (
        <div className="page use-state">
            <span className="num">{num}</span>
            <div>
                <button
                    className="num-inc"
                    onClick={() => setNum(num + 1)}
                >+</button>
                <button
                    className="num-dec"
                    onClick={() => setNum(num - 1)}
                >-</button>
            </div>
        </div>
    )
}

export default UseState