'use strict';
const {Module} = require('module');

const overrides = new Map;

Module._resolveFilename = function ($resolveFilename) {
  return function _resolveFilename(name, ...rest) {
    if (overrides.has(name))
      name = overrides.get(name);
    return $resolveFilename.call(this, name, ...rest);
  };
}(Module._resolveFilename);

module.exports = overrides;
