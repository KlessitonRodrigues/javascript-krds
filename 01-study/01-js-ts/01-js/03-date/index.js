const textField = document.querySelector(".text-field")
const toDay = new Date()

textField.innerHTML = `${weekNameString(toDay.getDay())},  ${toDay.getDate()} de 
                        ${monthNameString(toDay.getMonth())} de ${toDay.getFullYear()} 
                        <b>${toDay.getHours()}:${toDay.getMinutes()}:${toDay.getSeconds()}<b>`

function weekNameString(week) {
    const weeksString = ["Domingo", "Segunda-Feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    return week >= 0 && week <= 6 ? weeksString[week] : "no week"
}

function monthNameString(month) {
    const monthsString = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "julho", "agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return month >= 0 && month <= 11 ? monthsString[month] : "no month"
}

// short syntax

textField.innerHTML += "<br>" +
    toDay.toLocaleDateString("pt-BR", {
        "weekday": "long",
        "day": "numeric",
        "month": "long",
        "year": "numeric",
    })
