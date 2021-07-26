function request(xhrConfig) {
    const xhr = new XMLHttpRequest()

    // method: http verb, url: file path, async?
    xhr.open(xhrConfig.method, xhrConfig.url, true)
    xhr.send()

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            xhrConfig.success(xhr.responseText)
        } else {
            xhrConfig.error(xhr.statusText)
        }
    })
}

document.addEventListener("click", ev => {
    const element = ev.target

    if (element.tagName.toLowerCase() === "a") {
        ev.preventDefault()
        loadPage(element)
    }
})

function loadPage(element) {
    const href = element.getAttribute("href")

    request({
        method: "GET",
        url: href,
        success(response) {
            loadContent(response)
        },
        error(err) {
            console.log(err);
        }
    })
}

function loadContent(html) {
    document.getElementsByClassName("content")[0]
        .innerHTML = html
}