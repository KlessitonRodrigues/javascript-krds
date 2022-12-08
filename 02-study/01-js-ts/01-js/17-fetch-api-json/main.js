fetch("data.json")
    .then(resp => resp.json())
    .then(json => loadElements(json))


function loadElements(json) {
    const table = document.createElement("table")

    for (let item of json) {
        const tr = document.createElement("tr")

        const td = `
            <td>
                <b>${item.name}</b>
            </td>
            <td>${item.lastName}</td>
            <td>${item.age}</td>
            <td>${item.country}</td>
        `
        tr.innerHTML = td

        table.appendChild(tr)
    }

    document.getElementsByClassName("content")[0]
        .appendChild(table)
}