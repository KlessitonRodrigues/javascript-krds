import React from "react"

const Interval = props => (
    <div className="card card-interval">
        <div className="card-title">
            <h3>intervalo</h3></div>

        <div className="card-body">
            <label> min
                <input
                    type="number"
                    placeholder="0" /></label>

            <label> max
                <input
                    type="number"
                    placeholder="0" /></label></div>
    </div>
)

export default Interval