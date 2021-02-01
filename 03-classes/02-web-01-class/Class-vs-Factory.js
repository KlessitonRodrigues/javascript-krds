// Class
class People {
    constructor(name) {
        this.name = name
    }
    whoIAm() {
        console.log(this.name)
    }
}

const p1 = new People("Maria")
p1.whoIAm()

// Factory
const newPeople = name => {
    return {
        whoIAm: () => console.log(name)
    }
}

const p2 = newPeople("João")
p2.whoIAm()