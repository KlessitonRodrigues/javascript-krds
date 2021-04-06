import React, { useRef } from "react"
import "./RenderCount.css"

const RenderCount = props => {
    const countRef = useRef(0)
    countRef.current = countRef.current + 1

    return (
        <div className="render-count">
            Child Render Count: {countRef.current}
            <hr />
            Parent Count: {"null" && props.count}
        </div>
    )
}

export default React.memo(RenderCount)