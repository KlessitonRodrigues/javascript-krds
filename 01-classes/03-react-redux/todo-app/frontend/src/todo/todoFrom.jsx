import React from "react"
import Grid from "../template/grid"
import IconButton from "../template/iconButton"

export default props => {
    function keyUpHandler(e) {
        e.key === "Enter" && props.handleAdd()
    }

    return (
        <div className="todo-form">
            <Grid cols="12 8 10">
                <input
                    type="text"
                    className="form-control"
                    value={props.description}
                    onKeyUp={keyUpHandler}
                    onChange={ev =>
                        props.handleChange(ev.target.value)} /></Grid>

            <Grid cols="12 4 2">
                <div className="btn-group">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={props.handleAdd} />
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={props.handleSearch} />
                    <IconButton
                        style="info"
                        icon="close"
                        onClick={props.handleClean} /></div></Grid>
        </div>
    )
}