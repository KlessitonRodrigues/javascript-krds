export class User<T, U> {
  constructor(public name: T, public age: U) {}
}

const user1 = new User('name', 20);

user1.name // string
user1.age // number
