# require-overrides

A hacky way to alias modules with *SSR* counterparts, currently working only in *NodeJS* via *CommonJS* module system.

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
  uland: 'uland-ssr',
});
```
