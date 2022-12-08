import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Grid from "../template/grid"
import IconButton from "../template/iconButton"
import {
    changeDescription,
    clearDescription,
    search,
    add,
} from "./todoActions"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyUpHandler = this.keyUpHandler.bind(this)
    }

    keyUpHandler(e) {
        e.key === "Enter" && this.props.add(
            this.props.description)
    }

    componentDidMount() {
        this.props.search()
    }

    render() {
        const { add,
            changeDescription,
            description } = this.props

        return (
            <div className="todo-form">
                <Grid cols="12 8 10">
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onKeyUp={this.keyUpHandler}
                        onChange={changeDescription} />
                </Grid>

                <Grid cols="12 4 2">
                    <div className="btn-group">
                        <IconButton
                            style="primary"
                            icon="plus"
                            onClick={() => add(description)} />
                        <IconButton
                            style="info"
                            icon="search"
                            onClick={this.props.search} />
                        <IconButton
                            style="info"
                            icon="close"
                            onClick={this.props.clearDescription} />
                    </div>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispath => bindActionCreators({
    changeDescription,
    clearDescription,
    search,
    add,
}, dispath)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(TodoForm)