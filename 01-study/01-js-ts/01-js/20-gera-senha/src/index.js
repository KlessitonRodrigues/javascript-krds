import "./assets/css/style.css"
import password from "./assets/js/password"

function runBtnClick() {
    const options = {
        limit: document.getElementById("limitField").value,
        number: document.getElementById("numberCheck").checked,
        lowCase: document.getElementById("lowCaseCheck").checked,
        upCase: document.getElementById("upCaseCheck").checked,
        special: document.getElementById("specialCheck").checked,
    }

    document.querySelector(".password")
        .innerHTML = password(options)
}

document.querySelector("#runBtn")
    .addEventListener("click", runBtnClick)