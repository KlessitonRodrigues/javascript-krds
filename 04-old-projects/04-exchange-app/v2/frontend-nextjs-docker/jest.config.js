/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  rootDir: 'src/__tests__/',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.svg$': '<rootDir>/__modules__/fileTransformer.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './jest.tsconfig.json'
    }
  }
}
