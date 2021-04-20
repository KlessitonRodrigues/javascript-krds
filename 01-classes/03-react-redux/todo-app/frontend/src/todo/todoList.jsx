import React from "react"
import IconButton from "../template/iconButton"

export default props => {
    const TodoList = props.list && props.list.map(todo =>
        <tr
            key={todo._id}
            id={todo.id}
            className={todo.done ? "success" : ""}>
            <td className="todo-description">
                {todo.description}
            </td>
            <td>
                {todo.createAt}
            </td>
            <td className="btn-group">
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
                    onClick={() => props.handleRemove(todo)}
                    style="danger"
                    icon="trash-o" />
            </td>
        </tr>
    )

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {TodoList}
            </tbody>
        </table>
    )
}