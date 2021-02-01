const elements = [
    { tag: "p", text: "phrase 01" },
    { tag: "div", text: "phrase 02" },
    { tag: "footer", text: "phrase 03" },
    { tag: "section", text: "phrase 04" }
]
const mainDiv = document.querySelector("body div")

elements.forEach(element => {
    const { tag, text } = element
    const createTag = document.createElement(tag)
    createTag.innerText = text
    mainDiv.appendChild(createTag)
})