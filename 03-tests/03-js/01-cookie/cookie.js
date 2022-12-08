function setCookies(value, id = "userName", validDays = 1) {
    const date = new Date()
    date.setUTCDate(date.getUTCDate() + validDays)
    if (id && value)
        document.cookie = `${id}=${value}; expires=${date.toUTCString()}`
}

function getCookies() {
    return document.cookie.split("=")[1]
}

function clearCookies() {
    setCookies(" ", "userName", 0)
    document.body.innerHTML = "clean! reload the page..."
}

function askName() {
    const name = prompt("whats you name?")
    setCookies(name)
    document.body.innerHTML = "reload the page"
}

function verifyCokies() {
    if (!getCookies()) {
        askName()
    } else {
        document.body.innerHTML =
            `<h1>Wellcome ${getCookies()}</h1>
            <button onclick="clearCookies()">Clear Cookies</button>`
    }
}

verifyCokies()