type Contructor = new (...args: any[]) => any;

function decorator(sufix: string) {
  return function <T extends Contructor>(target: T): T {
    return class extends target {
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.color = `${args[0]} ${sufix}`;
      }
    };
  };
}

function decorator2(param: string) {
  return function (target: Contructor) {
    console.log(param);
    return target;
  };
}

@decorator2('decorator 2')
@decorator('- has be decorated!')
export class Animal {
  constructor(public color: string) {}
}

const cat = new Animal('white');
console.log(cat.color);
