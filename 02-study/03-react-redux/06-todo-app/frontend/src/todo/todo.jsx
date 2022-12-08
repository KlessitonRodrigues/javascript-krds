import axios from "axios"

import React from "react"
import PageHeader from "../template/pageHeader"
import TodoForm from "./todoFrom"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos"

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { description: "", list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClean = this.handleClean.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.markAsDone = this.markAsDone.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    refresh(description = "") {
        const search = description ?
            `&description__regex=/${description}/`
            : ""

        axios.get(URL + `?sort=-createdAt${search}`)
            .then(res => this.setState(
                { ...this.state, description, list: res.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description
        if (!description) return null

        axios.post(URL, { description })
            .then(res => this.refresh())
    }

    handleChange(value) {
        this.setState({ ...this.state, description: value })
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description))
    }

    markAsDone(todo) {
        axios.put(`${URL}/${todo._id}`,
            { ...todo, done: !todo.done })
            .then(res =>
                this.refresh(this.state.description))
    }

    handleClean() {
        this.refresh()
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Todo" small="cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClean={this.handleClean} />
                <TodoList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    markAsDone={this.markAsDone} /></div>
        )
    }
}