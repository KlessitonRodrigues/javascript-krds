import React from "react"

import PageHeader from "../template/pageHeader"
import TodoForm from "./todoFrom"
import TodoList from "./todoList"

export default props => (
    <div>
        <PageHeader name="Todo" small="cadastro" />
        <TodoForm />
        <TodoList />
    </div>
)
