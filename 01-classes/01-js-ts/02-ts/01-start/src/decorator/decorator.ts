@decorator
export class Animal {
  constructor(public color: string) {}
}

const cat = new Animal('white');
console.log(cat.color);

// decorator (<T extends new "Constructor">)
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  // anonymous class
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = `${args[0]} - decorated`;
    }
  };
}

// const AnimalDecorated = decorator(Animal);

// const cat2 = new AnimalDecorated('white');
// console.log(cat2.color);
