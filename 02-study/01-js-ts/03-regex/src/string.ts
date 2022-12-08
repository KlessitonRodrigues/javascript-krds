import { text } from "./text";

const sea = text.match(/sea/gi);

const seaOrSun = text.match(/sea|sun/gi);

const replacedSun = text.substr(0, 30).replace(/sun/g, "YELLOW");

const reference = text.substr(0, 30).replace(/(sun)/g, " -> $1 <- ");

const cb = text.substr(0, 30).replace(/(sun)/g, (str) => str.toUpperCase());

console.log("STRINGS.ts");
console.log(sea, seaOrSun);
console.log(replacedSun);
console.log(reference);
console.log(cb);
