const calc = {
    num1: "",
    num2: "",
    operator: "",
    setDisplay: null,
    setResult: null,
}

calc.getButton = function (btn) {

    switch (true) {

        case /\d/.test(btn):
            !this.operator ?
                this.num1 += btn :
                this.num2 += btn
            break

        case /\D/.test(btn):
            this.operator += btn
            break
    }

    this.setDisplay(this.num1 + "/" + this.num2)

    if (this.num2) {
        this.setResult("= " + this.num1 + this.num2)
    }
}

export default calc