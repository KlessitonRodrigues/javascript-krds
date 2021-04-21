import React from "react"
import IconButton from "../template/iconButton"

function formatTodoDate(todo) {
    return new Date(todo.createAt)
        .toLocaleTimeString("pt-BR",
            { hour12: true, hour: "2-digit", minute: "2-digit" })
}

export default props => {

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
                    onClick={() => props.handleRemove(todo)}
                    style="danger"
                    icon="trash-o"
                    hide={!todo.done} /></td></tr>
    )

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Hora</th></tr></thead>
            <tbody>{TodoList}</tbody>
        </table>
    )
}