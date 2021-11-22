// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/js',
    public: { static: true, url: '/' },
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    knownEntrypoints: ['react-is', '@material-ui/core/utils'],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
}
