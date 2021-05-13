# require-overrides

A hacky *CommonJS* way to alias modules with *SSR* counterparts.

### Example
```js
const overrides = require('require-overrides');

// use 'uhtml-ssr' instead of 'uhtml' when components
// are loaded through the server, not the client
overrides.set('uhtml', 'uhtml-ssr');

// now every
const {render, html, svg} = require('uhtml');
// will point instead at require('uhtml-ssr')
```

The default export is a *callback* with attached all *Map* methods and properties, and it is possible to bootstrap multiple overrides at once.

```js
const overrides = require('require-overrides');
overrides({
  uhtml: 'uhtml-ssr',
  // overrides, as callback, will receive all the module details
  uland: (name, ...rest) => 'uland-ssr',
});
```

### How to do this via ESM

Until `import-maps` is officially supported, it is possible to use [@node-loader/import-maps](https://github.com/node-loader/node-loader-import-maps), example:

```sh
IMPORT_MAP_PATH=test-esm/node.importmap node --experimental-loader @node-loader/import-maps test-esm/index.js
```
