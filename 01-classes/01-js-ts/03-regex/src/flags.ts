import { text } from "./text";

const sun = /sun/.test(text); // => true

const SUN = /SUN/.test(text); // => false

const SUNi = /SUN/i.test(text); // => true

console.log("FLAGS.ts");
console.log(sun, SUN, SUNi);
