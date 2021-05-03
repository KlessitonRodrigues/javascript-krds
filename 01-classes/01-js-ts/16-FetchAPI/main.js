document.addEventListener("click", ev => {
    const element = ev.target

    if (element.tagName.toLowerCase() === "a") {
        ev.preventDefault()
        loadPage(element)
    }
})

async function loadPage(element) {
    const href = element.getAttribute("href")
    try {
        const response = await fetch(href)
        const data = await response.text()
        
        loadContent(data)
    } catch (err) {
        console.log(err);
    }
}

function loadContent(html) {
    document.getElementsByClassName("content")[0]
        .innerHTML = html
}