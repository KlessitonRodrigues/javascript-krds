const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stringArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(numberArr.filter((num) => num % 2 != 0));
console.log(stringArr.filter((str) => Number(str) % 2 != 0));

type CallbackFn<U> = (value: U, index: number, array: U[]) => Boolean;

export function myFilter<T>(arr: T[], cb: CallbackFn<T>): T[] {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) filteredArr.push(arr[i]);
  }

  return filteredArr;
}

console.log(myFilter(numberArr, (num, i, arr) => num % 2 != 0));
console.log(myFilter(stringArr, (str, i, arr) => Number(str) % 2 != 0));
