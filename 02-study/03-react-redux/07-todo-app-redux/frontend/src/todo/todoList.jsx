import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { markAsDone, removeTodo } from "./todoActions"

import IconButton from "../template/iconButton"

function formatTodoDate(todo) {
    const dateNow = new Date().getTime()
    const dateTodo = new Date(todo.createAt).getTime()
    const interval = (dateNow - dateTodo) / 60000

    return `${parseInt(interval / 60)} h 
    e ${parseInt(interval % 60)} m atrás`
}

const TodoList = props => {

    const TodoList = props.list && props.list.map(todo =>
        <tr
            key={todo._id}
            id={todo.id}
            className={todo.done ? "success" : ""}>
            <td className="table-description">
                {todo.description}</td>
            <td className="table-time">{formatTodoDate(todo)}</td>
            <td className="table-actions btn-group">
                <IconButton
                    onClick={() => props.markAsDone(todo)}
                    style="success"
                    icon="check"
                    hide={todo.done} />
                <IconButton
                    onClick={() => props.markAsDone(todo)}
                    style="info"
                    icon="undo"
                    hide={!todo.done} />
                <IconButton
                    onClick={() => props.removeTodo(todo)}
                    style="danger"
                    icon="trash-o"
                    hide={!todo.done} />
            </td>
        </tr>
    )

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Criado à</th>
                </tr>
            </thead>
            <tbody>{TodoList}</tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    markAsDone,
    removeTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)