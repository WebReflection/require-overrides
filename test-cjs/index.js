const overrides = require('../cjs');

overrides.set('whatsoever', './ok.js');

require('./test.js');
