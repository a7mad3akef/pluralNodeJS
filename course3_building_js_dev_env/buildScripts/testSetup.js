// require babel to transpile before our tests run
require('babel-register')();
// disable webpack features that mocha doesn't understand 
require.extensions['.css'] = function () {
  // body...
}
