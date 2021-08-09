type mapStringCallback = (char: string) => string;

export function mapString(str: string, cb: mapStringCallback): string {
  let strMapped = '';
  let i = 0;

  while (i < str.length) {
    strMapped += cb(str[i]);
    i++;
  }

  return strMapped;
}

const alphabet = 'ABCDEF';

console.log(mapString(alphabet, (char) => `(${char}) `));
