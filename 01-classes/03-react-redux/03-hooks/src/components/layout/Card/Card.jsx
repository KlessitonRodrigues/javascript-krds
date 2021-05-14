import React from "react"
import "./Card.css"

const Card = (props) => (
    <div className="card">
        <div className="title">
            <h3>{props.title}</h3>
        </div>
        <div className="content">
            {props.content}
        </div>
    </div>
)

export default Card