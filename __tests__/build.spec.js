jest.setTimeout(600000)

const runTests = require('./build.helper.js').runTests

test('build:electron', async () => {
  await runTests()
})
