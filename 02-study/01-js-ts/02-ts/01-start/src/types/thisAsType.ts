export class Calc {
  constructor(public number: number) {}
  add(value: number): this {
    this.number += value;
    return this;
  }

  sub(value: number): this {
    this.number -= value;
    return this;
  }

  mul(value: number): this {
    this.number *= value;
    return this;
  }

  div(value: number): this {
    this.number /= value;
    return this;
  }
}

const result = new Calc(10).add(10).mul(5).sub(50);

console.log(result);
