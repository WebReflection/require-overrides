const overrides = require('../cjs');

const whatsoever = '../test-cjs/ok.js';

console.assert(!overrides.has('whatsoever'));
console.assert(overrides.size === 0);

overrides({
  whatsoever,
  invoked: () => whatsoever
});

require('./test.js');

console.assert(overrides.has('invoked'));
console.assert(overrides.get('whatsoever') === whatsoever);
console.assert(overrides.size === 2);
