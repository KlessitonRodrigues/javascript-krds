export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function sum<T>(...args: T[]): any {
  return args.reduce((sum, value) => {
    if (isNumber(value)) return sum + value;
    return 0;
  }, 0);
}

sum(1, 2, 3);
