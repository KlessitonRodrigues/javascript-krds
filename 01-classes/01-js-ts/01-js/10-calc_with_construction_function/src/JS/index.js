function Calc() {
    this.display = document.querySelector(".calc-display");
    this.start = () => {
        this.addBtnClick()
    };
    this.addBtnClick = ev => {
        document.querySelector(".calc").addEventListener("click", (ev) => {
            if (!ev.target.classList.contains("calc-btn")) return
            switch (ev.target.innerHTML) {
                case "=":
                    this.resultDisplay()
                    break;
                case "C":
                    this.clearDisplay()
                    break;
                case "DEL":
                    this.deleteDisplayNum()
                    break;
                default:
                    this.addToDisplay(ev.target.innerHTML)
            }
        })
    };
    this.addToDisplay = (num) => {
        if (this.display.innerHTML.length > 17) return
        this.display.innerHTML += `${num}`
    };
    this.clearDisplay = () => {
        this.display.innerHTML = ""
    }
    this.deleteDisplayNum = () => {
        this.display.innerHTML = this.display.innerHTML.slice(0, -1)
    }
    this.resultDisplay = () => {
        try {
            this.display.innerHTML = eval(this.display.innerHTML)
        } catch (e) {
            alert("Erro de lógica")
        }
    }
}

const calc = new Calc()
calc.start()
