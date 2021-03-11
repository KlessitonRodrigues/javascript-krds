const Calc = () => {
    let operation = ""
    let result = ""

    this.setResult = (num) => {
        result = num
    }

    this.getValue = () => {
        return "getValue"
    }

    this.setOperation = (value) => {
        switch (true) {
            case value === "Del":
                operation.slice(-1, 1)
                break;
            case value === "AC":
                operation = ""
                break;
            case /\d/.test(value):
                break;

        }
    }
}

export default new Calc