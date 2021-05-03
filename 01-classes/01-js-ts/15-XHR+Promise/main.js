function request(xhrConfig) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        // method: http verb, url: file path, async?
        xhr.open(xhrConfig.method, xhrConfig.url, true)
        xhr.send()

        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

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
        const response = await request({ method: "GET", url: href })
        loadContent(response)
    } catch (err) {
        console.log(err);
    }

}

function loadContent(html) {
    document.getElementsByClassName("content")[0]
        .innerHTML = html
}