// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    //_output: { url: "/", static: true },
    dist: { url: "/", static: true },
    src: { url: "/dist" },
  },
  mode: "development",
  plugins: [
    "@snowpack/plugin-sass"
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
