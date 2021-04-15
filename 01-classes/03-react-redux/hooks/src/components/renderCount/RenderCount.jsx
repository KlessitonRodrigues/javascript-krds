import React, { useRef } from "react"
import "./RenderCount.css"

const RenderCount = props => {
    const countRef = useRef(0)
    countRef.current = countRef.current + 1
    
    return (
        <div className="render-count">
            Child Render: <b>{countRef.current}</b>
            <hr />
            <input
                type="text"
                placeholder="Input"
                onChange={e => props.setInput(e.target.value)
                } />
        </div>
    )
}

export default React.memo(RenderCount)