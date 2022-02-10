// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/js",
    public: { static: true, url: "/" },
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  knownEntrypoints: ["react-is", "react/jsx-runtime"],

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
