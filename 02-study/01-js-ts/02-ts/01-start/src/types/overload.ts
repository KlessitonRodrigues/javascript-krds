type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

export const sum: Adder = (
  x: number = 0,
  y: number = 0,
  ...args: number[]
): number => {
  return x + y + args.reduce((sum, num) => sum + num, 0);
};

console.log(sum(10));
console.log(sum(10, 10));
console.log(sum(10, 10, 10, 10));
