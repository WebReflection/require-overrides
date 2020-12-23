const overrides = require('../cjs');

console.assert(!overrides.has('whatsoever'));
console.assert(overrides.size === 0);

overrides({
  whatsoever: '../test-cjs/ok.js'
});

require('./test.js');

console.assert(overrides.has('whatsoever'));
console.assert(overrides.get('whatsoever') === '../test-cjs/ok.js');
console.assert(overrides.size === 1);
