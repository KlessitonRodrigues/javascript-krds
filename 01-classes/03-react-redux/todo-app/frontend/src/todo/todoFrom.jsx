import React from "react"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"

export default props => (
    <div>
        <Grid cols="12 8 10">
            <input
                type="text"
                className="form-control"
                value={props.description}
                onChange={ev =>
                    props.handleChange(ev.target.value)} />
        </Grid>
        <Grid cols="12 4 2">
            <div className="btn-group">
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd} />
                <IconButton style="primary" icon="search" />
            </div>
        </Grid>
    </div>
)