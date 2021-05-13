'use strict';
const {Module} = require('module');

const {defineProperty, keys} = Object;

const map = new Map;

/**
 * Set one or more overrides through an object literal.
 * @param {object} multiple an object with one or more `key: value` overrides.
 */
const overrides = multiple => {
  for (const key of keys(multiple))
    map.set(key, multiple[key]);
};

for (const method of [
  'get', 'set', 'has',
  'delete', 'clear',
  'entries', 'keys', 'values',
  'forEach'
])
  overrides[method] = map[method].bind(map);

defineProperty(overrides, 'size', {get: () => map.size});

Module._resolveFilename = function ($resolveFilename) {
  return function _resolveFilename(name, ...rest) {
    let value = name;
    if (map.has(name)) {
      value = map.get(name);
      if (typeof value === 'function')
        value = value(name, ...rest);
    }
    return $resolveFilename.call(this, value, ...rest);
  };
}(Module._resolveFilename);

module.exports = overrides;
