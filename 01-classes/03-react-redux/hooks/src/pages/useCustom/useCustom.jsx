import React from "react"
import useCounter from "../../hooks/useCounter"
import "./useCustom.css"

const useCustom = () => {
    const [couter, inc, dec] = useCounter()
    return (
        <div className="page use-custom">
            <h2>Custom Hooks</h2>
            <span className="counter">{couter}</span>
            <div>
                <button className="inc" onClick={() => inc(2)}
                >inc</button>
                <button className="dec" onClick={() => dec(2)}
                >dec</button>
            </div>
        </div>
    )
}
export default useCustom