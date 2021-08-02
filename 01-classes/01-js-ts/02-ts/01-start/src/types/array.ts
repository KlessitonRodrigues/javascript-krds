// syntax:  Array<T> || T[]

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((stack, value) => stack * value, 1);
}

export function joinStrings(...args: string[]): string {
  return args.reduce((stack, string) => stack + string);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const result2 = joinStrings('A', 'B', 'C');
const result3 = toUpperCase('a', 'b', 'c');

console.log(result, result2, result3);
