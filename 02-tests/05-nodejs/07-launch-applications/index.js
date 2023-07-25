const process = require("child_process");

try {
  const result = process.execSync("code ..").toString();
  console.log(result);
} catch (e) {
  console.log(e);
}
