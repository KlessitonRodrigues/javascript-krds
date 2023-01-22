class Calculator {
    num1 = ""
    num2 = ""
    operator = ""
    isClean = true
    setOpeDisplay = null
    setResDisplay = null

    buttonTypeCheck(btn) {
        if (btn === "AC" || btn === "Del") return btn
        if (btn === "." || /\d/.test(btn)) return "numberBtn"
        return "operatorBtn"
    }

    result() {
        const num1 = Number(this.num1),
            num2 = Number(this.num2)

        if (this.operator === "+") return num1 + num2
        if (this.operator === "-") return num1 - num2
        if (this.operator === "/") return num1 / num2
        if (this.operator === "x") return num1 * num2
    }

    resetCalc() {
        [this.num1, this.num2, this.operator] = ["", "", ""]
        this.setOpeDisplay("")
        this.setResDisplay("")
    }

    getButton(btn) {

        const btnType = this.buttonTypeCheck(btn)

        switch (btnType) {
            case "AC":
                this.resetCalc()
                break

            case "Del":
                break

            case "numberBtn":
                this.operator === "" ?
                    this.num1 += btn :
                    this.num2 += btn
                break

            case "operatorBtn":
                if (this.num2 !== "") {
                    this.num1 = this.result()
                    this.operator = btn
                    this.num2 = ""
                    this.setResDisplay("")
                } else {
                    this.operator = btn
                }
                break
        }

        this.setOpeDisplay(this.num1 + this.operator + this.num2)
        if (this.num2 !== "") this.setResDisplay("= " + this.result())
    }
}

const calc = new Calculator()
export default calc