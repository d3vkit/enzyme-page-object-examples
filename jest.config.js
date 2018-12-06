module.exports = {
  clearMocks: true,
  setupTestFrameworkScriptFile: "<rootDir>/demo/setupTests.js",
  testPathIgnorePatterns: [
    '<rootDir>/.*/*.section.js',
    '<rootDir>/.*/pages/*',
  ],
  verbose: true,
}
