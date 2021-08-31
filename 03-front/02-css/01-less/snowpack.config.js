// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src/static": {static: true, url: "/"},
    src: "/",
  },
  plugins: [
    "snowpack-plugin-less"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
  },
  buildOptions: {
    /* ... */
  },
};
