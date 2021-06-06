import React from "react"

export default ({ display }) => (
    <div style={{ display: display ? "" : "none" }}>
        <div className="cover" />
        <div className="frame" >
            <input />
            <input />
            <input />
            <input />
            <button>Create{console.log(display)}</button>
        </div>
    </div>
)