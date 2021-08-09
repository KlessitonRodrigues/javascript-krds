import { text } from "./text";

console.log(/sun/.test(text)); // => true

console.log(/SUN/.test(text)); // => false

console.log(/SUN/i.test(text)); // => false