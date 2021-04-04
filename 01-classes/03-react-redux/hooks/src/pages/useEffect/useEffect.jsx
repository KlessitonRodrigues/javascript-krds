import React, { useState, useEffect } from "react"
import "./useEffect.css"

const UseEffect = () => {
    const [num, setNum] = useState(0)
    const [numStatus, setNumStatus] = useState("")

    useEffect(() => {
        if (num === 0) return setNumStatus("")

        num % 2 === 0
            ? setNumStatus("par")
            : setNumStatus("impar")
    }, [num])
    return (
        <div className="page use-effect">
            <span className="num-status">{numStatus}</span>
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

export default UseEffect