import React, { useRef } from "react"
import "./RenderCount.css"

const RenderCount = props => {
    const countRef = useRef(0)
    countRef.current = countRef.current + 1

    console.log(props);

    return (
        <div className="render-count">
            Child Render: <b>{countRef.current}</b>
            <hr />
            <b>input:</b>
            <input
                type="text"
                onChange={e => props.setInput(e.target.value)
                } />
        </div>
    )
}

export default React.memo(RenderCount)