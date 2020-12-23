const overrides = require('../cjs');

overrides({
  whatsoever: '../test-cjs/ok.js'
});

require('./test.js');
