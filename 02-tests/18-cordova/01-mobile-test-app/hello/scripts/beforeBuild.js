const cp = require("child_process");

const outDir = "./www";
const distDir = "./dist";
const copyAssets = `cp -rv ${distDir}/. ${outDir}`;

module.exports = function (context) {
  console.log(cp.execSync(copyAssets).toString());
};
