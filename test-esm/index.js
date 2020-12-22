import overrides from '../esm/index.js';

overrides.set('whatsoever', '../test-cjs/ok.js');

import './test.js';
