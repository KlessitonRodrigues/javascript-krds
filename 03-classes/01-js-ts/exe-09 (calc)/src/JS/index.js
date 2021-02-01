const calc = {
    calcDisplay: document.querySelector(".calc-display"),
    getBtnClick(event) {
        if (event.target.classList.contains("calc-btn")) {
            const btn = event.target.innerHTML
            switch (true) {
                case btn === "C":
                    this.displayCleaner()
                    break;
                case btn === "=":
                    this.displayResult()
                    break;
                case btn === "DEL":
                    this.displayRemoveLast()
                    break;
                default:
                    this.displayAdd(btn)
            }
        }
    },

    displayCleaner() {
        this.calcDisplay.innerHTML = ""
    },

    displayAdd(digit) {
        if (this.calcDisplay.innerHTML.length < 17)
            this.calcDisplay.innerHTML += `${digit}`
    },

    displayResult() {
        try {
            // Danger function "eval()"
            this.calcDisplay.innerHTML = eval(this.calcDisplay.innerHTML)
        } catch (e) {
            alert("Erro lógico")
        }
    },

    displayRemoveLast() {
        const displayText = this.calcDisplay.innerHTML
        this.calcDisplay.innerHTML = displayText.substr(0, displayText.length - 1)
    }
}

document.querySelector(".calc")
    .addEventListener("click", function (event) {
        calc.getBtnClick(event)
    })
