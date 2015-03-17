// In-browser testing using mocha runner.
// Run 'npm run devel', open http://localhost:8080/basal-tests
module.exports = {
    entry: 'mocha!./test/index.js',
    output: {
        path: __dirname + '/build/test',
        filename: 'basal-tests.js'
    }
};
