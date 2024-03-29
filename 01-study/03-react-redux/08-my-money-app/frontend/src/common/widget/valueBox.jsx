import React from "react"
import Grid from "../layout/grid"

export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className="inner">
                <h2>{props.value}</h2>
                <p>{props.text}</p>
            </div>
            <div className="icon">
                <i className={`fa fa-${props.icon}`} />
            </div>
        </div>
    </Grid>
)