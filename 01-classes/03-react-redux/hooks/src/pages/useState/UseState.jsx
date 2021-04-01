import React, { useState } from "react"
import "./UseState.css"

const UseState = () => {
    const [num, setNum] = useState()
    return (
        <div className="use-state">
            <span className="num">0</span>
            <div>
                <button className="num-inc">+</button>
                <button className="num-dec">-</button>
            </div>
        </div>
    )
}

export default UseState