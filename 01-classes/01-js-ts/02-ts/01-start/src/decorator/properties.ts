function decorator(classPrototype: any, methodName: string | symbol): any {
  console.log(classPrototype);
  console.log(methodName);
  let propValue: any;
  return {
    get: () => propValue + ' - decorated!',
    set: (value: string) => {
      propValue = value;
    },
  };
}

export class People {
  @decorator
  name = '';

  @decorator
  lastName = '';

  age = 0;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const people1 = new People('A', 'B', 1);

console.log(people1.name);
