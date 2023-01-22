import React from "react"
import { connect } from "react-redux"

const Card = props => {
    const min = Number(props.min) || 0
    const max = Number(props.max) || 0
    const type = props.type

    function operation() {
        if (type === "media") return (min + max) / 2
        if (type === "soma") return min + max
        if (type === "aleatório") {
            const random = Math.random() * (max - min) + min
            return Math.round(random)
        }
    }

    return (
        <div className={"card card-" + type}>
            <div className="card-title"><h3>{type}</h3></div>
            <div className="card-body">{operation()}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    min: state.numbers.min,
    max: state.numbers.max
})

export default connect(mapStateToProps)(Card)