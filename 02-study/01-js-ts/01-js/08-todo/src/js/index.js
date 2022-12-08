const addTodoIpt = document.querySelector(".add-todo-input")
const todoList = getLocalStorage()

function addInTodoList(id = 0, todo = "IS NULL") {
    const newDivElement = document.createElement("div")
    newDivElement.classList.value = "container todo"
    newDivElement.setAttribute("id", `${id}`)
    newDivElement.innerHTML = `
        <input class="todo-checkbox" type="checkbox">
        <span class="todo-text">${todo}</span>
        <button class="todo-btn">Excluir<span> `
    document.querySelector(".show-todo").appendChild(newDivElement)
}

function addTodoDelete() {
    document.querySelectorAll(".todo-btn").forEach(element => {
        element.addEventListener("click", (event) => {
            if (confirm("Deseja deletar o todo?"))
                todoList.splice(Number(event.path[1].getAttribute("id")), 1)
            //delete todoList[Number(event.path[1].getAttribute("id"))]
            renderTodoList()
        })
    })
}

function addTodoColorChange() {
    document.querySelectorAll(".todo-checkbox").forEach(element => {
        element.addEventListener("click", (event) => {
            event.path[1].classList.value.search(" done") >= 0 ?
                event.path[1].classList.value = event.path[1].classList.value.replace(" done", "") :
                event.path[1].classList.value += " done"
        })
    })
}

function renderTodoList() {
    document.querySelector(".show-todo").innerHTML = ""
    todoList.forEach((value, index) => {
        addInTodoList(index, value)
    })
    addTodoDelete()
    addTodoColorChange()
    setLocalStorage()
}
renderTodoList()

document.querySelector(".add-todo-btn").addEventListener("click", () => {
    if (!addTodoIpt.value)
        return alert("Campo vazio")
    todoList.push(addTodoIpt.value)
    renderTodoList()
})

function setLocalStorage() {
    window.localStorage.setItem("todoList", todoList)
}

function getLocalStorage() {
    const todoList = window.localStorage.getItem("todoList")
    if (todoList)
        return todoList.split(",")
    return []
}
//window.localStorage.clear()