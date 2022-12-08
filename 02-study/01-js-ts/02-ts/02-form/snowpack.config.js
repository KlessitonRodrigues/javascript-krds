// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/static': { url: '/', static: true },
    src: '/assets',
  },
  mode: 'development',
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-sass'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'dist/',
  },
};
