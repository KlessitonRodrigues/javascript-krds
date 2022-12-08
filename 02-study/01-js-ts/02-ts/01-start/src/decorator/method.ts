function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: () => 'overwrited',
  };
}

export class People {
  name = '';
  lastName = '';
  age = 0;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const people1 = new People('a', 'b', 1);
console.log(people1.fullName());
