function sayHello(b: string) {
    console.log(b)
}

const a = (b: string) => sayHello(b)

a('hello')
