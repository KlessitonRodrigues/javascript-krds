import React from "react"
import { connect } from "react-redux"
import { alterMin, alterMax } from "../store/actions/numbers"

const Interval = props => (
    <div className="card card-interval">
        <div className="card-title">
            <h3>intervalo</h3></div>

        <div className="card-body">
            <label> min
                <input
                    type="number"
                    value={props.min}
                    placeholder="0"
                    onChange={e =>
                        props.setMin(+e.target.value)} /></label>

            <label> max
                <input
                    type="number"
                    value={props.max}
                    placeholder="0"
                    onChange={e =>
                        props.setMax(+e.target.value)} /></label>
        </div>
    </div>
)

const mapStateToProps = state => ({
    min: state.numbers.min,
    max: state.numbers.max
})

const mapDispatchToProps = dispatch => ({
    setMin(min) {
        // ACTION CREATOR => ACTION
        dispatch(alterMin(min))
    },
    setMax(max) {
        dispatch(alterMax(max))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Interval)