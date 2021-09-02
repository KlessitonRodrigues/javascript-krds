// avoid method overwrite

class Sum {
    getSum(): void{
        console.log(1 + 2)
    }
}

class Sum2 extends Sum{
    getSum(): void{
        console.log(2 + 3)
        super.getSum() // <- original method
    }
}

// avoid constructor overwrite

class user {
    constructor(public name: string){
    }
}

class user2 extends user{
    lastName: string
    constructor(name: string, lastName: string){
        super(name)
        this.lastName = lastName
    }
}
