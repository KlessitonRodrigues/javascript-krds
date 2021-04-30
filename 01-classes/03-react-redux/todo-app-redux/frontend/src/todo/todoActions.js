import axios from "axios"

const URL = "http://localhost:3003/api/todos"

export const search = () => (dispatch, getState) => {
    const description = getState().todo.description
    const search = description
        ? `&description__regex=/${description}/`
        : ""

    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(res => dispatch(
            { type: "TODO_SEARCHED", payload: res.data }
        ))
}

export const changeDescription = event => ({
    type: "DESCRIPTION_CHANGED",
    payload: event.target.value
})

export const clearDescription = () => [
    { type: "DESCRIPTION_CLEAR" },
    search()
]

export const add = description => dispatch =>
    axios.post(URL, { description })
        .then(res => dispatch(search()))
        .then(res => dispatch(clearDescription()))

export const markAsDone = todo => dispatch =>
    axios.put(`${URL}/${todo._id}`, { ...todo, done: !todo.done })
        .then(res => dispatch(search()))

export const removeTodo = todo => dispatch =>
    axios.delete(`${URL}/${todo._id}`)
        .then(res => dispatch(search()))
