import { cpfs } from "./text";

console.log("CPFs.ts");
console.log(cpfs.match(/(...)\.(...)\.(...)\-(..)/g));
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g));

