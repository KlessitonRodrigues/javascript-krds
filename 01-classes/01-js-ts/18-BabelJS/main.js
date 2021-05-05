const variable = "hello"

const obj = {
    variable,
    variable,
    variable
}

const obj2 = {
    ...obj
}

class pessoa {
    constructor(name, lastName, address) {
        this.name = name
        this.lastName = lastName
        this.address = address
    }

    get address() {
        return `${this.name} ${this.address}`
    }

    set address(value) {
        this.address = value
    }
}

const splitStr = str => str.split()

let props = {
    propA: "A",
    propB: "B",
    propC: "C",
}

const {propA, propB, propC} = obj3