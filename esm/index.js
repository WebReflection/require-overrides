import {Module} from 'module';

const {defineProperty, keys} = Object;

const map = new Map;

const overrides = init => {
  for (const key of keys(init))
    map.set(key, init[key]);
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
    return $resolveFilename.call(
      this,
      map.has(name) ? map.get(name) : name,
      ...rest
    );
  };
}(Module._resolveFilename);

export default overrides;
