import overrides from '../esm/index.js';

overrides({
  whatsoever: '../test-cjs/ok.js'
});

import './test.js';
