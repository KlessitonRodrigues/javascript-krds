import React from "react"

const RenderCount = props => {
    let Count = 0

    return (
        <div className="render-count">
            {Count++}
        </div>
    )
}

export default RenderCount