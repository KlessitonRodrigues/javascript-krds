function decorator(
  classPrototype: any,
  methodName: string,
  index: number,
): void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class People {
  name = '';
  lastName = '';
  age = 0;
  constructor(
    @decorator name: string,
    @decorator lastName: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}
