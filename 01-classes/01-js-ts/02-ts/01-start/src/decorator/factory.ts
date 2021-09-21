function decorator(sufix: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = `${args[0]} ${sufix}`;
      }
    };
  };
}

@decorator('- has be decorated!')
export class Animal {
  constructor(public color: string) {}
}

const cat = new Animal('white');
console.log(cat.color);
