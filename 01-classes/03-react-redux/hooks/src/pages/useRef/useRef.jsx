import React, { useRef, useState } from "react"
import "./useRef.css"

const UseRef = () => {
    const inputEl = useRef(null)
    const [inputText, setInputState] = useState("")
    const inputChange = () => {
        setInputState(inputEl.current.value)
    }

    return (
        <div className="page use-ref">
            <div>
                <span className="input-text">
                    {inputText}
                </span>
            </div>
            <input 
                type="text" 
                ref={inputEl}
                onChange={inputChange}/>
        </div>
    )
}

export default UseRef